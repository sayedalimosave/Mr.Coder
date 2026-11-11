(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const data = window.PORTFOLIO_DATA;
  function getProjects(){ try{return JSON.parse(localStorage.getItem("mrcoder-projects"))||data.projects;}catch{return data.projects;} }
  const translations = {
    fa:{
      skip:"رفتن به محتوای اصلی",navHome:"خانه",navAbout:"درباره من",navProjects:"پروژه‌ها",navBlog:"وبلاگ",navContact:"تماس",
      availability:"آماده همکاری روی پروژه‌های تازه",heroEyebrow:"توسعه‌دهنده فرانت‌اند و طراح رابط کاربری",
      heroTitle:'ایده‌ها را به <span class="gradient-text">تجربه‌های دیجیتال</span> تبدیل می‌کنم.',
      heroText:"من سیدعلی موسوی هستم؛ توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت وب‌سایت‌های سریع، واکنش‌گرا و کاربردی.",
      heroProjects:"مشاهده پروژه‌ها",heroContact:"شروع همکاری",based:"مستقر در افغانستان",cleanCode:"کدنویسی تمیز",creativeUi:"رابط خلاقانه",
      skillsTitle:"مهارت‌های من",skillsText:"ابزارهایی که با آن‌ها ایده‌ها را به محصول تبدیل می‌کنم.",
      htmlDesc:"ساختار معنایی و استاندارد صفحات وب",cssDesc:"طراحی واکنش‌گرا و سیستم‌های بصری",jsDesc:"تعامل پویا و منطق سمت کاربر",uiDesc:"رابط ساده، منسجم و قابل استفاده",
      projectsTitle:"پروژه‌های منتخب",projectsText:"نمونه‌هایی از تمرین‌ها و پروژه‌های کاربردی من.",projectCta:"پیشنهاد پروژه دارید؟ ↗",
      filterAll:"همه",filterFrontend:"فرانت‌اند",filterUi:"رابط کاربری",aboutTitle:"سلام، من سیدعلی موسوی هستم.",
      aboutText:"به ساخت رابط‌هایی علاقه دارم که در کنار ظاهر حرفه‌ای، سریع، قابل دسترس و ساده برای استفاده باشند.",
      aboutText2:"مسیر من با HTML، CSS و JavaScript شروع شده است. از ساخت پروژه‌های واقعی لذت می‌برم و همیشه به دنبال یادگیری و بهتر کردن جزئیات هستم.",
      factSkills:"مهارت اصلی",factFocus:"تمرکز بر یادگیری",factIdeas:"ایده برای ساخت",downloadCv:"دانلود رزومه نمونه ↓",
      journeyTitle:"مسیر حرفه‌ای من",journeyText:"یادگیری مداوم، تمرین و ساختن.",journey1Title:"توسعه‌دهنده فرانت‌اند مستقل",
      journey1Text:"ساخت پروژه‌های کاربردی با HTML، CSS و JavaScript و تمرکز بر تجربه کاربری.",journey2Title:"یادگیری و توسعه مهارت‌ها",
      journey2Text:"تمرین مفاهیم وب، طراحی واکنش‌گرا، کار با API و اصول کدنویسی تمیز.",
      blogTitle:"یادداشت‌ها و آموزش‌ها",blogText:"چیزهایی که در مسیر یادگیری کشف می‌کنم.",sayHello:"ارتباط با من ↗",
      contactTitle:"ایده‌ای برای ساخت داریم؟",contactText:"درباره پروژه‌تان بنویسید تا با هم بهترین مسیر را پیدا کنیم.",
      formName:"نام شما",formEmail:"ایمیل",formMessage:"پیام",sendMessage:"ارسال پیام",
      footerText:"ساخته‌شده با دقت و علاقه توسط سیدعلی موسوی.",readMore:"ادامه مطلب ↗",invalid:"لطفاً نام، ایمیل معتبر و پیام حداقل ۱۰ حرفی وارد کنید.",
      sent:"برنامه ایمیل شما باز می‌شود. برای ارسال نهایی پیام را تأیید کنید.",projectEmpty:"پروژه‌ای در این دسته وجود ندارد."
    },
    en:{
      skip:"Skip to main content",navHome:"Home",navAbout:"About",navProjects:"Projects",navBlog:"Blog",navContact:"Contact",
      availability:"Available for selected projects",heroEyebrow:"Frontend Developer & UI Designer",
      heroTitle:'Turning ideas into <span class="gradient-text">thoughtful digital</span> experiences.',
      heroText:"I'm Sayed Ali Mosavi, a frontend developer focused on building fast, responsive and useful web experiences.",
      heroProjects:"Explore projects",heroContact:"Let’s work together",based:"Based in Afghanistan",cleanCode:"Clean code",creativeUi:"Thoughtful UI",
      skillsTitle:"My skills",skillsText:"Tools I use to turn ideas into useful products.",
      htmlDesc:"Semantic and accessible web structure",cssDesc:"Responsive layouts and visual systems",jsDesc:"Dynamic interactions and client-side logic",uiDesc:"Simple, consistent and useful interfaces",
      projectsTitle:"Selected projects",projectsText:"A selection of practical experiments and projects.",projectCta:"Have a project in mind? ↗",
      filterAll:"All",filterFrontend:"Frontend",filterUi:"UI design",aboutTitle:"Hi, I'm Sayed Ali Mosavi.",
      aboutText:"I enjoy building interfaces that feel polished while remaining fast, accessible and easy to use.",
      aboutText2:"My journey started with HTML, CSS and JavaScript. I enjoy building practical projects and continuously improving my craft.",
      factSkills:"Core skills",factFocus:"Learning mindset",factIdeas:"Ideas to build",downloadCv:"Download sample resume ↓",
      journeyTitle:"My journey",journeyText:"Keep learning, practicing and building.",journey1Title:"Independent frontend developer",
      journey1Text:"Building practical projects with HTML, CSS and JavaScript, with a focus on user experience.",journey2Title:"Learning and growing",
      journey2Text:"Practicing web fundamentals, responsive design, APIs and clean code principles.",
      blogTitle:"Notes & articles",blogText:"Things I discover along the learning journey.",sayHello:"Say hello ↗",
      contactTitle:"Have an idea to build?",contactText:"Tell me about your project and let's find the right way forward.",
      formName:"Your name",formEmail:"Email",formMessage:"Message",sendMessage:"Send message",
      footerText:"Crafted with care by Sayed Ali Mosavi.",readMore:"Read article ↗",invalid:"Please enter a name, valid email and a message of at least 10 characters.",
      sent:"Your email app is opening. Confirm the message there to send it.",projectEmpty:"No projects in this category yet."
    }
  };
  let locale = localStorage.getItem("mr-locale") || "fa";
  let activeFilter = "all";
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function applyLanguage(){
    const t=translations[locale];document.documentElement.lang=locale;document.documentElement.dir=locale==="fa"?"rtl":"ltr";
    document.title=locale==="fa"?"MR.CODER | سیدعلی موسوی":"MR.CODER | Sayed Ali Mosavi";
    $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(t[key])el.innerHTML=t[key];});
    $("#languageToggle").textContent=locale==="fa"?"EN":"فا";
    renderProjects();renderPosts();localStorage.setItem("mr-locale",locale);
  }
  function renderProjects(){
    const list=getProjects().filter(p=>activeFilter==="all"||p.category===activeFilter);
    $("#projectsGrid").innerHTML=list.length?list.map(p=>`<article class="project-card">
      <div class="project-art" aria-hidden="true"><div class="mock-window"><div class="mock-line"></div><div class="mock-line"></div><div class="mock-line"></div></div></div>
      <div class="project-info"><div><span class="project-category">${p.category==="ui"?"UI DESIGN":"FRONTEND"}</span><h3>${escapeHTML(p.title[locale])}</h3><p>${escapeHTML(p.desc[locale])}</p><div class="tag-list">${p.tags.map(x=>`<span class="tag">${escapeHTML(x)}</span>`).join("")}</div></div><span class="project-arrow">↗</span></div></article>`).join(""):`<p>${translations[locale].projectEmpty}</p>`;
  }
  function renderPosts(){
    $("#blogGrid").innerHTML=data.posts.map(p=>`<article class="blog-card"><span class="blog-date">${p.date}</span><h3>${escapeHTML(p.title[locale])}</h3><p>${escapeHTML(p.desc[locale])}</p><span class="blog-more">${translations[locale].readMore}</span></article>`).join("");
  }
  $("#languageToggle").addEventListener("click",()=>{locale=locale==="fa"?"en":"fa";applyLanguage();});
  const savedTheme=localStorage.getItem("mr-theme")||"dark";document.documentElement.dataset.theme=savedTheme;$("#themeIcon").textContent=savedTheme==="dark"?"☼":"☾";
  $("#themeToggle").addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;$("#themeIcon").textContent=next==="dark"?"☼":"☾";localStorage.setItem("mr-theme",next);});
  $("#menuToggle").addEventListener("click",()=>{const nav=$("#mainNav"),open=nav.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));$("#menuToggle").textContent=open?"✕":"☰";});
  $$(".main-nav a").forEach(a=>a.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");$("#menuToggle").textContent="☰";}));
  $$(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{activeFilter=btn.dataset.filter;$$(".filter-btn").forEach(b=>b.classList.toggle("active",b===btn));renderProjects();}));
  $("#contactForm").addEventListener("submit",e=>{
    e.preventDefault();const form=e.currentTarget,name=form.elements.name.value.trim(),email=form.elements.email.value.trim(),message=form.elements.message.value.trim(),feedback=$("#formFeedback");
    if(name.length<2||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||message.length<10){feedback.textContent=translations[locale].invalid;return;}
    const subject=encodeURIComponent(`Portfolio contact from ${name}`),body=encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const saved=JSON.parse(localStorage.getItem("mrcoder-messages")||"[]");
    saved.push({name,email,message,time:new Date().toISOString()});
    localStorage.setItem("mrcoder-messages",JSON.stringify(saved.slice(-100)));
    feedback.textContent=translations[locale].sent;window.location.href=`mailto:sayedalimosave12@gmail.com?subject=${subject}&body=${body}`;
  });
  $("#year").textContent=new Date().getFullYear();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
  $$(".reveal").forEach(el=>observer.observe(el));
  applyLanguage();
})();
