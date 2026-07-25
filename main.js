/* ── Borrowed Brain Pro — GSAP + ScrollTrigger Animations ───────────────────
   Powered by GreenSock Animation Platform (GSAP 3)
   - Smooth Hero Timeline Entrance
   - ScrollTrigger-driven section reveals
   - Staggered Bento Grid, Mode Cards, & Roster Pills
   - Interactive hover micro-animations
   - Robust offline fallback
────────────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky nav shadow on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.borderColor = 'rgba(88, 166, 255, 0.2)';
        nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
      } else {
        nav.style.borderColor = 'rgba(240, 246, 252, 0.08)';
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Check if GSAP and ScrollTrigger are loaded
  if (typeof gsap !== 'undefined' && !prefersReduced) {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 1. HERO TIMELINE ENTRANCE
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    
    heroTl.from('.hero-badge-wrap', { opacity: 0, y: -20, delay: 0.1 })
          .from('.hero-headline', { opacity: 0, y: 35 }, '-=0.5')
          .from('.hero-sub', { opacity: 0, y: 25 }, '-=0.5')
          .from('.hero-actions', { opacity: 0, y: 20 }, '-=0.5')
          .from('.hero-img-card', { opacity: 0, y: 45, scale: 0.96 }, '-=0.6');

    // 2. SECTION TAGS & HEADLINES
    gsap.utils.toArray('.section-tag, .section-headline, .section-sub, .problem-headline').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: 'power2.out'
      });
    });

    // 3. PROBLEM COMPARISON GRID (Bad vs Good)
    if (document.querySelector('.compare-grid')) {
      gsap.from('.compare-bad', {
        scrollTrigger: { trigger: '.compare-grid', start: 'top 80%' },
        opacity: 0,
        x: -40,
        duration: 0.85,
        ease: 'power3.out'
      });

      gsap.from('.compare-good', {
        scrollTrigger: { trigger: '.compare-grid', start: 'top 80%' },
        opacity: 0,
        x: 40,
        duration: 0.85,
        ease: 'power3.out'
      });
    }

    // 4. MODES GRID (Staggered Cards)
    if (document.querySelector('.modes-grid')) {
      gsap.from('.mode-card', {
        scrollTrigger: { trigger: '.modes-grid', start: 'top 80%' },
        opacity: 0,
        y: 45,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }

    // 5. BOARDROOM DEMO TRANSCRIPT (Staggered Line Reveal)
    if (document.querySelector('.demo-transcript')) {
      gsap.from('.transcript-round, .transcript-line, .verdict-line', {
        scrollTrigger: { trigger: '.demo-transcript', start: 'top 75%' },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
      });
    }

    // 6. BENTO CAPABILITIES GRID
    if (document.querySelector('.bento-grid')) {
      gsap.from('.bento-cell', {
        scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' },
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }

    // 7. ROSTER PILLS (Spring Elastic Batch Entrance)
    if (document.querySelector('.roster-pills')) {
      gsap.from('.pill', {
        scrollTrigger: { trigger: '.roster-pills', start: 'top 85%' },
        opacity: 0,
        scale: 0.85,
        y: 18,
        duration: 0.45,
        stagger: 0.03,
        ease: 'back.out(1.4)'
      });
    }

    // 8. INSTALLATION TABLE ROWS
    if (document.querySelector('.install-table')) {
      gsap.from('.install-row', {
        scrollTrigger: { trigger: '.install-table', start: 'top 85%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
      });
    }

    // 9. HOVER MICRO-INTERACTIONS (Buttons & Cards)
    document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.03, duration: 0.2, ease: 'power1.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1.0, duration: 0.2, ease: 'power1.out' });
      });
    });

    document.querySelectorAll('.mode-card, .bento-cell, .compare-col').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -4, duration: 0.25, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
      });
    });

  } else {
    // Fallback: IntersectionObserver for offline environments
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.mode-card, .bento-cell, .pill, .install-row, .compare-col').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
});
