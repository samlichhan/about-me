var typed;

const trans = {
  en: {
    // 首頁
    twelcome: "Hello, my name is <span class='name'>Sam Li</span>",
    tsintro: "I am a programmer with over one year of internship experience, specializing in front-end and back-end engineering, creating applications using Python, creating visual charts using PowerBI, and more",
    tab_home: "<i class='fa fa-home'></i> Home",
    tab_about: "<i class='fa fa-user'></i> About",
    // tab_services: "<i class='fa fa-list'></i> Services",
    tab_portfolio: "<i class='fa fa-briefcase'></i> Portfolio",
    tab_contact: "<i class='fa fa-comments'></i> Contact",
    
    // 關於我
    tabout: "About Me",
    tabouttitle: "I'm <span>Sam</span>",
    taboutintro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque quisquam cupiditate tempora illum corporis, minima fuga eos, temporibus nobis voluptatum. Delectus quos debitis dolorum optio pariatur, consequuntur commodi incidunt.",
    taboutbirth: "Birthday : <span>26 Mar 2002</span>",
    taboutage: "Age : <span>22</span>",
    taboutweb: "Website : <span><a href='https://pse.is/6q4b5d' target='_blank'>click here!</a></span>",
    taboutmail: "Email : <span>lic85370@gmail.com</span>",
    taboutdegree: "Degree : <span>SCU CSIM</span>",
    taboutphone: "Phone : <span>(+886) 0987-115-592</span>",
    taboutcity: "City : <span>Taiwan, Taipei</span>",
    tabouthireme: "Hire Me!",
    taboutedu: "Education",
    taboutexp: "Experience",
    tabouttimeline1: "Bachelor of Computer Science Information Management"
  },
  zh: {
    // 首頁
    twelcome: "你好，我是<span class='name'>李承翰</span>",
    tsintro: "我是一名程式設計師，擁有超過一年實習經驗，專注於前端和後端開發，熟悉使用 Python 開發應用程式、使用 PowerBI 創建視覺化圖表等。",
    tab_home: "<i class='fa fa-home'></i> 首頁",
    tab_about: "<i class='fa fa-user'></i> 關於",
    // tab_services: "<i class='fa fa-list'></i> 服務",
    tab_portfolio: "<i class='fa fa-briefcase'></i> 作品集",
    tab_contact: "<i class='fa fa-comments'></i> 聯絡我",

    // 關於我
    tabout: "關於我",
    tabouttitle: "我是<span>李承翰</span>",
    taboutintro: "這裡之後放自介",
    taboutbirth: "生日 : <span>2002年 3月 26日</span>",
    taboutage: "年齡 : <span>22 歲</span>",
    taboutweb: "網站 : <span><a href='https://pse.is/6q4b5d' target='_blank'>傳送門!</a></span>",
    taboutmail: "聯絡信箱 : <span>lic85370@gmail.com</span>",
    taboutdegree: "學位: <span>東吳大學資訊管理學系</span>",
    taboutphone: "聯絡電話 : <span>(+886) 0987-115-592</span>",
    taboutcity: "居住城市 : <span>台灣, 台北市</span>",
    tabouthireme: "聯絡我!",
    taboutedu: "學習歷程",
    taboutexp: "工作經驗",
    tabouttimeline1: "資訊管理學系學士"
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

    // loop
    Object.keys(trans[currentLanguage]).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        element.innerHTML = trans[currentLanguage][key];
      }
    });
});

window.addEventListener("load", () => {
    if (currentLanguage === "zh") {
        languageSwitcherToggle.querySelector("i").classList.add("fa-e");
    } else {
        languageSwitcherToggle.querySelector("i").classList.add("fa-c");
    }
})

