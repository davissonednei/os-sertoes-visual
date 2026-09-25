const progressBar = document.querySelector('#progressBar');
const currentSection = document.querySelector('#currentSection');
const sections = [...document.querySelectorAll('[data-section]')];

function updateProgress(){
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
  progressBar.style.width = value + '%';
}

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if(visible) currentSection.textContent = visible.target.dataset.section;
}, {rootMargin:'-20% 0px -60% 0px', threshold:[0,.2,.5,.8]});

sections.forEach(section => observer.observe(section));
window.addEventListener('scroll', updateProgress, {passive:true});
window.addEventListener('resize', updateProgress);
updateProgress();
