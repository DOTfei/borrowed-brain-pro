// ui-ux-pro-max §7: scroll-driven animations, MOTION_INTENSITY:6
// No useState, no React — plain DOM with IntersectionObserver
// prefers-reduced-motion respected

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(0,0,0,0.4)'
      : 'none';
  }, { passive: true });
}

// Scroll-driven fade-in (§7: duration 150-450ms, ease-out enter)
if (!prefersReduced) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  // Stagger grid children (§7: stagger-sequence 30-50ms)
  document.querySelectorAll(
    '.mode-card, .bento-cell, .install-row, .pill, .compare-col'
  ).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${Math.min(i * 40, 200)}ms`;
    observer.observe(el);
  });
}
