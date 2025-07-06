var typed;

var tababoutintro_entext = `Hi, my name is Sam, a graduate of
                      <strong>Soochow University</strong>, Department of
                      <strong>Computer Science Inforfmation Management</strong>.
                      During my four years of study, I not only acquired solid
                      technical knowledge but also actively engaged in
                      extracurricular projects that broadened my professional
                      and interpersonal skills. 
                      <br /><br />
                      🔧 <strong>Self-Motivated Learning & Technical Exploration</strong> 
                      <br />
                      Starting in my freshman year, I
                      joined a <strong>self-learning group</strong> with several classmates,
                      exploring tools and topics beyond the classroom such as
                      <strong><code>Python</code>, <code>SketchUp</code>, <code>Kali Linux</code>, </strong>and <strong><code>Sweet Home 3D</code></strong>. These
                      experiences deepened my understanding of both system logic
                      and design thinking, and cultivated my ability to learn
                      new technologies quickly and independently. In addition, I
                      participated in various school-organized and
                      corporate-sponsored courses, including:
                      <br /> 
                      &emsp;☁️ Cloud Platform Deployment
                      <br /> 
                      &emsp;🎮 VR Application & Unity Development
                      <br /> 
                      &emsp;📱 Android App Programming
                      <br />
                      These experiences helped me develop a well-rounded skill
                      set and fostered an awareness of how technologies
                      integrate into real-world applications. 
                      <br /><br />
                      🌐 <strong>Language Skills & Global Mindset</strong> 
                      <br />
                      In the summer of 2022, I joined an
                      <strong>Advanced International English Communication Course</strong>, which
                      provided intensive TOEIC training and practical business
                      English practice. I passed the graduation benchmark and
                      gained greater confidence in using English in a
                      professional setting. Understanding that global
                      collaboration is a norm in today's tech industry, I
                      continue to improve my language skills to be ready for
                      cross-border teamwork. 
                      <br /><br />
                      💪 <strong>Attitude & Future Outlook</strong> 
                      <br />
                      I am a <strong>fast learner, open to feedback and continuous improvement</strong>.
                      I believe that flexibility and curiosity are key to
                      thriving in the ever-evolving tech field. If given the
                      opportunity to join your company, I will bring an
                      enthusiastic, proactive spirit and strive to contribute
                      value through real actions and long-term commitment.`

var tababoutintro_cntext = `您好，我是李承翰，畢業於 
                      <strong>東吳大學資訊管理學系</strong>。
                      在四年的求學過程中，我不僅累積了紮實的資訊專業知識，也積極參與課外活動與專案實作，為進入職場打下多元的基礎。 
                      <br /><br />
                      🔧 <strong>主動學習 × 技術探索</strong> 
                      <br />
                      我從大一開始便與幾位志同道合的同學組成 <strong>自主學習社群</strong>，課餘期間主動接觸課堂以外的工具與技術，例如：
                      <strong><code>Python</code>, <code>SketchUp</code>, <code>Kali Linux</code>,</strong>和<strong><code>Sweet Home 3D</code></strong>等等。這樣的嘗試讓我在實務與設計思維中都有更寬廣的視角，也訓練我面對新領域時，能快速吸收並應用的能力。
                      此外，我也積極參與校內外開設的各類講座與課程，包括：
                      <br /> 
                      &emsp;☁️ 雲端平台建置與應用
                      <br /> 
                      &emsp;🎮 VR 技術與 Unity 開發基礎
                      <br /> 
                      &emsp;📱 Android App 開發實作
                      <br />
                      這些經歷幫助我建立跨技術的整合視野，也提升了我對於使用者需求與系統應用場景的敏銳度。
                      <br /><br />
                      🌐 <strong>語言能力 × 國際視野</strong> 
                      <br />
                      2022 年暑假我參與校內舉辦的
                      <strong>高級國際英文溝通課程</strong>,課程以商業與科技英文為核心，並針對 TOEIC 多益進行進階訓練。在期末考中，我順利通過畢業門檻，也對自己的英文能力更具信心。我深知資訊產業正處於全球高度連結的環境，語言不僅是工具，更是溝通與成長的助力。
                      <br /><br />
                      💪 <strong>態度與未來展望</strong> 
                      <br />
                      我具備<strong>持續學習、接納建議、快速調整</strong>的特質，
                      並相信唯有保持彈性與創新，才能在競爭激烈的環境中站穩腳步。如果有幸成為貴公司的一員，我將秉持積極的態度，勇於承擔並持續成長，期許能為團隊貢獻實質價值，並在未來的專業路上不斷前進。`

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

const trans = {
  en: {
    // 網頁名稱
    twebtitle: "My portfolio",

    // 首頁
    twelcome: "Hello, my name is <span class='name'>Sam Li</span>",
    // tican: "I can serve as <span class='typing'></span>",
    tsintro:
      "I am a programmer with over one year of internship experience, specializing in front-end and back-end engineering, creating applications using Python, creating visual charts using PowerBI, and more",
    tab_home: "<i class='fa fa-home'></i> Home",
    tab_about: "<i class='fa fa-user'></i> About",
    // tab_services: "<i class='fa fa-list'></i> Services",
    tab_portfolio: "<i class='fa fa-briefcase'></i> Portfolio",
    tab_contact: "<i class='fa fa-comments'></i> Contact",

    // 關於我
    tabout: "About Me",
    tabouttitle: "I'm <span>Sam</span>",
    taboutintro: tababoutintro_entext,
    taboutbirth: "Birthday : <span>26 Mar 2002</span>",
    taboutage: "Age : " + calculateAge("2002-03-26"),
    taboutweb:
      "Website : <span><a href='https://pse.is/6q4b5d' target='_blank'>click here!</a></span>",
    taboutmail: "Email : <span>lic85370@gmail.com</span>",
    taboutdegree: "Degree : <span>SCU CSIM</span>",
    taboutphone: "Phone : <span>(+886) 0987-115-592</span>",
    taboutcity: "City : <span>Taiwan, Taipei</span>",
    tabouthireme: "Hire Me!",
    taboutedu: "Education",
    taboutexp: "Experience",
    tabouttimeline1: "Bachelor of Computer Science Information Management",
    taboutdes1:
      "Participated in multiple workshops, including Android app development, exploration of the Meta metaverse, Python self-learning groups with applications in fake news verification, IoT smart applications with Arduino, SketchUp modeling, and foundational implementation of Kali Linux. Achieved Honorable Mention in the JOY 2023 Sustainable Happiness Creative Competition and participated in the 2022 Fourth Hetai Public Welfare Dreamers Corporate Competition. Developed an AI Presentation Generator as a project, served as a research assistant for the DMOJ Programming Assessment System, and worked as a teaching assistant for the courses Computer Programming and Object-Oriented Programming.",
    tabouttimeline1_1: "AI Presentation Generator",
    taboutdes1_1:
      "Developed a system integrating ChatGPT API to generate AI-driven text and corresponding thematic images, which were seamlessly populated into appropriate PowerPoint templates. The project involved fine-tuning AI-generated content and enabling users to regenerate, add, or modify content through an interactive interface. The final output was a complete PowerPoint file featuring fully designed presentation slides and speaker notes with supplementary scripts.",
    tabouttimeline2: "Research Assistant",
    taboutdes2:
      "Developed a DMOJ program evaluation system and authored comprehensive installation and user manuals to facilitate seamless handover and ongoing maintenance",
    tabouttimeline2_1: "Visual Analysis Charts",
    taboutdes2_1:
      "Managed internal self-evaluation and supervisor assessment data by creating visual analysis charts and comprehensive spreadsheets, streamlining data organization and supporting future data-driven decision-making",
    tabouttimeline2_2: "Teaching Assistant",
    taboutdes2_2:
      "<span>Computer Programming</span><span>Object Oriented Programming</span> <br />Assist professors in setting exam questions, clarify students' doubts, and analyze the distribution of students' grades",
    tabouttimeline2_3: "Intern of Audit",
    taboutdes2_3:
      "Developed audit utility programs, including verification of company database records against public Ministry of Economic Affairs data, a visual interface for searching NAS documents by keyword or category, templates for subsidiary procurement and sales reports in Power BI, and an integrated audit working paper system",
    tabouttimeline2_4: "Intern of IT",
    taboutdes2_4:
      "Developed and tested Microsoft PowerApps to digitize legacy paper-based forms, upgraded outdated system frameworks, created web-based mini-games and data collection tools for the Human Resources department, and led back-end development while supporting front-end tasks for the electronic invoice project on a postpartum care center's website",

    // 作品集
    tport: "Portfolio",
    tportintro: "My Last Projects:",
    tportai: "▲ AI-Based Presentation Generation",
    tportdmoj: "▲ DMOJ Program Evaluation System",
    tportfile: "▲ File Search System",
    tportanaly: "▲ Analysis of Hotel Procurement & Sales Metrics",
    tportaudit: "▲ Online Audit Working Paper Integration System",
    tportbaby: "▲ Customer Service System for Gemcare Baby Care Center",
    tportscholar: "▲ Scholarship Application System",
    tporthrform: "▲ Survey Form (Inactive)",
    tporthrgame1: "▲ Lucky Draw Mini Game for NTU Campus Recruitment",
    tporthrgame: "▲ Lucky Draw Mini Game for Career Expo",
    tportmsapp1: "▲ Company Travel Expense Reimbursement App",

    // 聯絡我
    tcon: "Contact Me",
    tconques: "Any Questions?",
    tconserve: "I'm at your services!",
    tcemail: "Email",
    tcwebsite: "Website",
    tconphone: "Call Me on",
    tconsendmail: "Send Me An Email",
    tconres: "I'll be PLEASURE to response your messages!",
  },
  zh: {
    // 網頁名稱
    twebtitle: "我的作品集",

    // 首頁
    twelcome: "你好，我是<span class='name'>李承翰</span>",
    // tican: "我會 <span class='typing'></span>",
    tsintro:
      "我是一名程式設計師，擁有超過一年實習經驗，專注於前端和後端開發，熟悉使用 Python 開發應用程式、使用 PowerBI 創建視覺化圖表等。",
    tab_home: "<i class='fa fa-home'></i> 首頁",
    tab_about: "<i class='fa fa-user'></i> 關於",
    // tab_services: "<i class='fa fa-list'></i> 服務",
    tab_portfolio: "<i class='fa fa-briefcase'></i> 作品集",
    tab_contact: "<i class='fa fa-comments'></i> 聯絡我",

    // 關於我
    tabout: "關於我",
    tabouttitle: "我是<span>李承翰</span>",
    taboutintro: tababoutintro_cntext,
    taboutbirth: "生日 : <span>2002年 3月 26日</span>",
    taboutage: "年齡 : " + calculateAge("2002-03-26"),
    taboutweb:
      "網站 : <span><a href='https://pse.is/6q4b5d' target='_blank'>傳送門!</a></span>",
    taboutmail: "聯絡信箱 : <span>lic85370@gmail.com</span>",
    taboutdegree: "學位: <span>東吳大學資訊管理學系</span>",
    taboutphone: "聯絡電話 : <span>(+886) 0987-115-592</span>",
    taboutcity: "居住城市 : <span>台灣, 台北市</span>",
    tabouthireme: "聯絡我!",
    taboutedu: "學習歷程",
    taboutexp: "工作經驗",
    tabouttimeline1: "資訊管理學系學士",
    taboutdes1:
      "參與多項工作坊，包括 Android 應用程式開發、Meta 元宇宙探索、應用於假新聞驗證的 Python 自學小組、Arduino 物聯網智慧應用、SketchUp 建模，以及 Kali Linux 基礎實作。在 JOY 2023 永續幸福創意競賽中獲得佳作，並參加 2022 第四屆和泰公益圓夢企業競賽。完成 AI 簡報生成器專案，擔任 DMOJ 程式評測系統的研究助理，並擔任「計算機程式設計」及「物件導向程式設計」課程的教學助理",
    tabouttimeline1_1: "AI 簡報生成",
    taboutdes1_1:
      "開發了一套系統，整合 ChatGPT API 以生成 AI 驅動的文本及相應主題圖片，並將其填入適合的 PowerPoint 範本中。專案包括對 AI 生成內容的微調，讓使用者能透過互動介面重新生成、添加或修改內容。最終輸出為一個完整的 PowerPoint 文件，其中包含完善的簡報頁面以及附有補充腳本的演講者備註",
    tabouttimeline2: "研究助理",
    taboutdes2:
      "開發了 DMOJ 程式評測系統，並撰寫完整的安裝與使用手冊，以確保系統交接順利並支持後續的維護工作",
    tabouttimeline2_1: "視覺化分析圖表",
    taboutdes2_1:
      "管理內部自我評估與主管評核數據，透過製作視覺化分析圖表及完整的電子表格，優化數據整理流程，並支持未來以數據為導向的決策制定。",
    tabouttimeline2_2: "教學助理",
    taboutdes2_2:
      "<span>計算機程式設計</span><span>物件導向程式設計</span> <br />協助教授設計考題，解答學生疑問，並分析學生成績分佈。",
    tabouttimeline2_3: "稽核室實習生",
    taboutdes2_3:
      "開發多項稽核工具程式，包括比對公司資料庫記錄與經濟部公開數據的驗證功能、關鍵字或分類搜尋 NAS 文件的視覺化介面、Power BI 子公司採購與銷售報表模板，以及整合的審計工作底稿系統。",
    tabouttimeline2_4: "資訊處實習生",
    taboutdes2_4:
      "開發並測試 Microsoft PowerApps以數位化傳統紙本表單，升級過時系統框架，為人力資源部門製作基於網頁的迷你遊戲及數據收集工具，並主導月子中心系統電子發票專案的後端開發，同時支援前端相關工作。",

    // 作品集
    tport: "作品集",
    tportintro: "最近專案:",
    tportai: "▲ 基於人工智慧的簡報生成",
    tportdmoj: "▲ DMOJ 程式檢測系統",
    tportfile: "▲ 稽核資料查詢系統",
    tportanaly: "▲ 飯店採購與銷售指標分析",
    tportaudit: "▲ 稽核系統",
    tportbaby: "▲ 月子中心照護系統",
    tportscholar: "▲ 獎學金申請平台",
    tporthrform: "▲ 問卷填答(未正式啟用)",
    tporthrgame1: "▲ 台大校園徵才抽獎小遊戲",
    tporthrgame: "▲ Yourator 職涯博覽會抽獎小遊戲",
    tportmsapp1: "▲ 公司外出旅費報支表",

    // 聯絡我
    tcon: "聯絡我",
    tconques: "任何問題?",
    tconserve: "隨時等您聯繫!",
    tcemail: "信箱",
    tcwebsite: "網站",
    tconphone: "透過電話聯繫我",
    tconsendmail: "寄信給我",
    tconres: "收到您的來信是我的榮幸!",
  },
};

let currentLanguage = "en";

typed = new Typed(".typing", {
  strings: [
    currentLanguage === "zh" ? "全端工程" : "Full-Stack Engineer",
    currentLanguage === "zh" ? "後端工程" : "Back-End Engineer",
    currentLanguage === "zh" ? "前端工程" : "Front-End Engineer",
    currentLanguage === "zh" ? "應用程式開發" : "Application Developer",
  ],
  typeSpeed: 20,
  backSpeed: 10,
  backDelay: 1000,
  startDelay: 0,
  fadeOut: false,
  cursorChar: "🔥",
  loop: true,
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
    loopCount: Infinity,
  });

  // loop
  Object.keys(trans[currentLanguage]).forEach((key) => {
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
});
