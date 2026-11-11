(() => {
 const $=s=>document.querySelector(s);
 const KEYS={auth:"mrcoder-admin-auth",views:"mrcoder-views",messages:"mrcoder-messages",projects:"mrcoder-projects"};
 const defaultPassword=localStorage.getItem("mrcoder-admin-password")||"mrcoder-demo";
 let projects=JSON.parse(localStorage.getItem(KEYS.projects)||"null")||window.PORTFOLIO_DATA.projects;
 function saveProjects(){localStorage.setItem(KEYS.projects,JSON.stringify(projects));}
 function render(){
  const views=JSON.parse(localStorage.getItem(KEYS.views)||"[]"),messages=JSON.parse(localStorage.getItem(KEYS.messages)||"[]");
  $("#viewsCount").textContent=views.length;$("#projectCount").textContent=projects.length;$("#messageCount").textContent=messages.length;
  $("#adminProjects").innerHTML=projects.map((p,i)=>`<div class="admin-row"><div><strong>${escape(p.title.fa)}</strong><p>${escape(p.title.en)}</p></div><button data-delete-project="${i}" aria-label="Delete project">حذف</button></div>`).join("")||"<p class='muted'>پروژه‌ای ثبت نشده.</p>";
  $("#recentViews").innerHTML=views.slice(-8).reverse().map(v=>`<div class="admin-row"><div><strong>${escape(v.path)}</strong><p>${new Date(v.time).toLocaleString()}</p></div><span>${v.locale||""}</span></div>`).join("")||"<p class='muted'>بازدیدی ثبت نشده؛ صفحه اصلی را باز کنید.</p>";
  $("#adminMessages").innerHTML=messages.slice().reverse().map(m=>`<div class="admin-row"><div><strong>${escape(m.name)} · ${escape(m.email)}</strong><p>${escape(m.message)}</p></div></div>`).join("")||"<p class='muted'>پیامی ثبت نشده است.</p>";
 }
 function escape(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
 function showDashboard(){const ok=localStorage.getItem(KEYS.auth)==="yes";$("#loginPanel").hidden=ok;$("#dashboard").hidden=!ok;if(ok)render();}
 $("#loginForm").addEventListener("submit",e=>{e.preventDefault();if($("#adminPassword").value===defaultPassword){localStorage.setItem(KEYS.auth,"yes");$("#loginError").textContent="";showDashboard();}else $("#loginError").textContent="رمز عبور نادرست است.";});
 $("#logoutBtn").addEventListener("click",()=>{localStorage.removeItem(KEYS.auth);showDashboard();});
 $("#projectForm").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget;const v=new FormData(f);projects.push({id:Date.now(),category:v.get("category"),title:{fa:v.get("fa"),en:v.get("en")},desc:{fa:v.get("descFa"),en:v.get("descEn")},tags:["HTML","CSS","JavaScript"],visual:"custom"});saveProjects();f.reset();render();});
 $("#adminProjects").addEventListener("click",e=>{const b=e.target.closest("[data-delete-project]");if(!b)return;projects.splice(Number(b.dataset.deleteProject),1);saveProjects();render();});
 $("#clearData").addEventListener("click",()=>{if(!confirm("آمار بازدید و پیام‌ها پاک شوند؟"))return;localStorage.removeItem(KEYS.views);localStorage.removeItem(KEYS.messages);render();});
 showDashboard();
})();
