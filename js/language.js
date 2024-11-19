var typed;

const trans = {
  en: {
    twelcome: "Hello, my name is <span class='name'>Sam Li</span>",
    tsintro: "I am a programmer with over one year of internship experience, specializing in front-end and back-end engineering, creating applications using Python, creating visual charts using PowerBI, and more",
    tab_home: "<i class='fa fa-home'></i> Home",
    tab_about: "<i class='fa fa-user'></i> About",
    tab_services: "<i class='fa fa-list'></i> Services",
    tab_portfolio: "<i class='fa fa-briefcase'></i> Portfolio",
    tab_contact: "<i class='fa fa-comments'></i> Contact"
  },
  zh: {
    twelcome: "你好，我是<span class='name'>李承翰</span>",
    tsintro: "我是一名程式設計師，擁有超過一年實習經驗，專注於前端和後端開發，熟悉使用 Python 開發應用程式、使用 PowerBI 創建視覺化圖表等。",
    tab_home: "<i class='fa fa-home'></i> 首頁",
    tab_about: "<i class='fa fa-user'></i> 關於",
    tab_services: "<i class='fa fa-list'></i> 服務",
    tab_portfolio: "<i class='fa fa-briefcase'></i> 作品集",
    tab_contact: "<i class='fa fa-comments'></i> 聯絡我"
  },
};

let currentLanguage = "en";

typed = new Typed(".typing", {
    strings: [
      currentLanguage === "zh" ? "全端工程師" : "Full-Stack Engineer",
      currentLanguage === "zh" ? "後端工程師" : "Back-End Engineer",
      currentLanguage === "zh" ? "前端工程師" : "Front-End Engineer",
      currentLanguage === "zh" ? "應用程式開發師" : "Application Developer",
    ],
    typeSpeed: 20,
    backSpeed: 10,
    backDelay: 1000, 
    startDelay: 0,  
    fadeOut: false,
    cursorChar: "🔥",
    loop: true
});

const languageSwitcherToggle = document.querySelector(
  ".language-switcher-toggler"
);
languageSwitcherToggle.addEventListener("click", () => {
    typed.destroy();
    languageSwitcherToggle.querySelector("i").classList.toggle("fa-c");
    languageSwitcherToggle.querySelector("i").classList.toggle("fa-e");

    currentLanguage = currentLanguage === "zh" ? "en" : "zh";

    typed = new Typed(".typing", {
        strings: [
          currentLanguage === "zh" ? "全端工程師" : "Full-Stack Engineer",
          currentLanguage === "zh" ? "後端工程師" : "Back-End Engineer",
          currentLanguage === "zh" ? "前端工程師" : "Front-End Engineer",
          currentLanguage === "zh" ? "應用程式開發師" : "Application Developer",
        ],
        typeSpeed: 30,
        backSpeed: 10,
        backDelay: 500, 
        startDelay: 0,  
        cursorChar: "🔥",
        loop: true,
        loopCount: Infinity
    });

    // 更新頁面文本
    document.getElementById("twelcome").innerHTML = trans[currentLanguage].twelcome;
    document.getElementById("tsintro").innerHTML = trans[currentLanguage].tsintro;
    document.getElementById("tab_home").innerHTML = trans[currentLanguage].tab_home;
    document.getElementById("tab_about").innerHTML = trans[currentLanguage].tab_about;
    document.getElementById("tab_services").innerHTML = trans[currentLanguage].tab_services;
    document.getElementById("tab_portfolio").innerHTML = trans[currentLanguage].tab_portfolio;
    document.getElementById("tab_contact").innerHTML = trans[currentLanguage].tab_contact;
});

window.addEventListener("load", () => {
    if (currentLanguage === "zh") {
        languageSwitcherToggle.querySelector("i").classList.add("fa-e");
    } else {
        languageSwitcherToggle.querySelector("i").classList.add("fa-c");
    }
})

