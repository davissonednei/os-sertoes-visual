const progress = document.querySelector('#readingProgress');
const sceneId = document.querySelector('#sceneId');
const sceneSections = [...document.querySelectorAll('[data-scene]')];

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) sceneId.textContent = visible.target.dataset.scene;
}, { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -55% 0px' });

sceneSections.forEach(section => observer.observe(section));
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
