const experience=document.querySelector('.use-experience'),film=document.getElementById('exerciseFilm'),exerciseCards=[...document.querySelectorAll('.experience-cards .exercise-card')],dots=[...document.querySelectorAll('.progress-dots i')];
let duration=13,raf;
film.addEventListener('loadedmetadata',()=>{duration=film.duration||13;syncExperience()});
function syncExperience(){const rect=experience.getBoundingClientRect(),range=Math.max(1,experience.offsetHeight-innerHeight),progress=Math.max(0,Math.min(1,-rect.top/range));film.currentTime=progress*duration;const current=Math.min(3,Math.floor(progress*4.05));exerciseCards.forEach((card,i)=>{card.classList.toggle('is-visible',i<=current);card.classList.toggle('is-current',i===current)});dots.forEach((dot,i)=>dot.classList.toggle('is-active',i<=current));}
addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(syncExperience)},{passive:true});addEventListener('resize',syncExperience);syncExperience();
