// σκοτεινή αίθουσα — Main site behavior
// Extracted verbatim (logic-for-logic) from the original inline <script>
// block at the bottom of index.html. Runs on every page.

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) lucide.createIcons();

  // Current year (footer copyright)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Gallery scroll-reveal observer
  const revealTargets = document.querySelectorAll('.gallery-reveal');
  if (revealTargets.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // Accordion (FAQ)
  document.querySelectorAll('[data-accordion]').forEach(button => {
    button.addEventListener('click', () => toggleAccordion(button.getAttribute('data-accordion')));
  });
});

function toggleAccordion(faqId) {
  const targetAns  = document.getElementById('ans-' + faqId);
  const targetIcon = document.getElementById('icon-' + faqId);
  if (!targetAns || !targetIcon) return;
  const button = targetIcon.closest('button');

  const allAnswers = document.querySelectorAll('[id^="ans-"]');
  const allIcons   = document.querySelectorAll('[id^="icon-"]');

  allAnswers.forEach((ans, idx) => {
    const idSuffix = ans.id.replace('ans-', '');
    if (idSuffix !== faqId) {
      ans.style.maxHeight = null;
      allIcons[idx].style.transform = 'rotate(0deg)';
      allIcons[idx].closest('button').setAttribute('aria-expanded', 'false');
    }
  });

  if (targetAns.style.maxHeight) {
    targetAns.style.maxHeight = null;
    targetIcon.style.transform = 'rotate(0deg)';
    button.setAttribute('aria-expanded', 'false');
  } else {
    targetAns.style.maxHeight = targetAns.scrollHeight + 'px';
    targetIcon.style.transform = 'rotate(180deg)';
    button.setAttribute('aria-expanded', 'true');
  }
}
