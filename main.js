const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#site-menu');
const compact = matchMedia('(max-width:800px)');
toggle.parentElement.classList.add('js-menu');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
}
function resizeMenu() {
  toggle.hidden = !compact.matches;
  setMenu(false);
}
resizeMenu();
compact.addEventListener('change', resizeMenu);
toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    setMenu(false);
    toggle.focus();
  }
});
const motion = document.querySelector('#motion');
motion.hidden = false;
motion.addEventListener('click', () => {
  const paused = document.querySelector('.belt').classList.toggle('paused');
  motion.textContent = paused ? 'Play strip' : 'Pause strip';
});
