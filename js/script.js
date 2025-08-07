const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // for (let i = 0; i < totalSection; i++) {
    //   allSection[i].classList.remove("back-section");
    // }
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(element) {
  allSection[element].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

function calculateAge(birthDateStr) {
  const birthDate = new Date(birthDateStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection && targetSection.classList.contains("section")) {
      e.preventDefault();

      // 隱藏所有 section
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
      }

      // 顯示目標 section
      targetSection.classList.add("active");

      // 更新側邊欄 active 標記（若對應的項目存在）
      updateNav(this);

      // 可選：關閉側邊欄（手機版）
      // if (window.innerWidth < 1200) {
      //   asideSectionTogglerBtn();
      // }
    }
  });
});

// 讀取文章.md內容並轉換成HTML
async function loadMarkdownArticle(filePath, meta = null) {
  try {
    const response = await fetch(filePath);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    const container = document.getElementById("post-content-container");

    // 填入 Markdown 主體
    container.innerHTML = `<div class="markdown-body">${html}</div>`;

    if (meta) {
      document.getElementById("post-clicked-title").textContent = meta.title;
      document.getElementById("post-clicked-time").innerHTML = `
        <i class="fa fa-calendar" style="color: var(--skin-color)"></i>
        ${meta.date} |
        <i class="fa fa-clock" style="color: var(--skin-color)"></i>
        ${meta.read_time}
      `;
    }

    const tagContainer = document.getElementById("post-tags");
    if (tagContainer) {
      tagContainer.innerHTML = meta.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join(" ");
    }

    hljs.highlightAll();

    // 清除舊的 Giscus iframe
    const giscusContainer = document.getElementById("giscus-container");
    giscusContainer.innerHTML = "";

    // 建立 Giscus 留言 iframe
    const giscusScript = document.createElement("script");
    giscusScript.src = "https://giscus.app/client.js";
    giscusScript.setAttribute("data-repo", "samlichhan/about-me");
    giscusScript.setAttribute("data-repo-id", "R_kgDONNFmgw");
    giscusScript.setAttribute("data-category-id", "DIC_kwDONNFmg84Ct4iq");
    giscusScript.setAttribute("data-category", "Announcements");
    giscusScript.setAttribute("data-mapping", "specific");
    giscusScript.setAttribute("data-term", meta.title || "Untitled"); // 以文章標題為對應 key
    giscusScript.setAttribute("data-strict", "0");
    giscusScript.setAttribute("data-reactions-enabled", "1");
    giscusScript.setAttribute("data-emit-metadata", "0");
    giscusScript.setAttribute("data-input-position", "top");
    giscusScript.setAttribute("data-theme", "catppuccin_macchiato");
    giscusScript.setAttribute("data-lang", "zh-TW");
    giscusScript.setAttribute("data-loading", "lazy");
    giscusScript.setAttribute("crossorigin", "anonymous");
    giscusScript.async = true;

    giscusContainer.appendChild(giscusScript);
  } catch (error) {
    document.getElementById("post-content-container").innerHTML =
      "<p>文章載入失敗，請稍後再試。</p>";
    console.error("載入文章失敗：", error);
  }
}

async function loadPostList(filterTag = null) {
  try {
    const response = await fetch("./posts/index.json");
    const posts = await response.json();

    // 取得所有不重複標籤
    const allTags = new Set();
    posts.forEach((post) => post.tags.forEach((tag) => allTags.add(tag)));

    // 建立篩選標籤 UI
    const tagFilter = document.getElementById("tag-filter");
    tagFilter.innerHTML = `<span class="tag tag-filter-all ${
      !filterTag ? "active" : ""
    }">全部文章</span>`;
    allTags.forEach((tag) => {
      tagFilter.innerHTML += `<span class="tag tag-filter ${
        filterTag === tag ? "active" : ""
      }" data-tag="${tag}">${tag}</span>`;
    });

    // 標籤點擊事件
    tagFilter.querySelectorAll(".tag-filter").forEach((el) => {
      el.addEventListener("click", function () {
        const selected = this.dataset.tag;
        loadPostList(selected);
      });
    });
    tagFilter.querySelector(".tag-filter-all").addEventListener("click", () => {
      loadPostList(null);
    });

    // 過濾文章
    const filteredPosts = filterTag
      ? posts.filter((post) => post.tags.includes(filterTag))
      : posts;

    const listContainer = document.getElementById("post-list");
    listContainer.innerHTML = "";

    filteredPosts.forEach((post) => {
      const listItem = document.createElement("div");
      listItem.classList.add("post-item");
      listItem.innerHTML = `
        <h3 class="post-title" data-file="${post.file}">${post.title}</h3>
        <p class="post-meta"> ${post.date} ｜ 閱讀時間：約${post.read_time}</p>
        <div class="post-tags">
          ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")}
        </div>
      `;
      listContainer.appendChild(listItem);
    });

    // posts.forEach((post, index) => {
    //   const listItem = document.createElement("div");
    //   listItem.classList.add("post-item");
    //   listItem.innerHTML = `
    //     <h3 class="post-title" data-file="${post.file}">${post.title}</h3>
    //     <p class="post-meta">作者：${post.author} ｜ ${
    //     post.date
    //   } ｜ 閱讀時間：約${post.read_time}</p>
    //     <div class="post-tags">
    //       ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")}
    //     </div>
    //   `;
    //   listContainer.appendChild(listItem);
    // });

    // 點擊文章標題後打開文章內容
    document.querySelectorAll(".post-title").forEach((el) => {
      el.addEventListener("click", function () {
        const file = this.dataset.file;
        const postMeta = posts.find((p) => p.file === file);

        loadMarkdownArticle(`posts/${file}`, postMeta);
        showSectionById("post-content");
      });
    });
  } catch (error) {
    console.error("文章清單載入失敗：", error);
    document.getElementById("post-list").innerHTML =
      "<p>無法載入文章清單。</p>";
  }
}

function showSectionById(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  loadPostList();
});
