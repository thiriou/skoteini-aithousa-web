// σκοτεινή αίθουσα — Lightweight router helper
// Since the site now spans multiple pages (index.html, privacy.html,
// beta.html) instead of a single-page modal, this file keeps the
// header nav aware of which page/section is currently active.
// Purely additive: it does not change layout, spacing, or markup.

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('header nav a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('#')[0] || 'index.html';
    if (linkPath === currentPath || (linkPath === '' && currentPath === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
