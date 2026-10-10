const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const header = document.querySelector('.site-header');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 48);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}
