// ==========================================================
// Footer year
// ==========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================================
// Mobile nav toggle
// ==========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ==========================================================
// Reveal on scroll
// ==========================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ==========================================================
// Scroll-spy: highlight active nav link
// ==========================================================
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => spyObserver.observe(section));
