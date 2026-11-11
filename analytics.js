(() => {
 if(location.pathname.endsWith("admin.html"))return;
 const key="mrcoder-views",items=JSON.parse(localStorage.getItem(key)||"[]");
 items.push({path:location.pathname+location.hash,locale:document.documentElement.lang||"fa",time:new Date().toISOString()});
 localStorage.setItem(key,JSON.stringify(items.slice(-500)));
})();
