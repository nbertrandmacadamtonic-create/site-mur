function toggleLanguage(){document.body.classList.toggle('english');localStorage.setItem('mur-language',document.body.classList.contains('english')?'en':'fr');}
document.addEventListener('DOMContentLoaded',()=>{if(localStorage.getItem('mur-language')==='en')document.body.classList.add('english');});
