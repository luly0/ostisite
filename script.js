// === Navigation: Hamburger for mobile ===
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
  // Lock background scrolling for nav
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

// Close nav menu on link click (mobile)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// === Sticky Navbar Scroll Effect ===
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('is-sticky', window.scrollY > 8);
});

// === Smooth Scrolling Polyfill for All browsers ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// === Scroll Reveal Animations ===
function srReveal() {
  const elements = document.querySelectorAll('[data-sr-fade]');
  const winH = window.innerHeight;
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < winH - 80) {
      setTimeout(() => {
        el.classList.add('sr-visible');
      }, +el.style.getPropertyValue('--delay')?.replace('s','') * 1000 || 0);
    }
  });
}
window.addEventListener('scroll', srReveal);
window.addEventListener('resize', srReveal);
window.addEventListener('DOMContentLoaded', srReveal);

// === Lazy Loading Background Images ===
function lazyBg() {
  document.querySelectorAll('.lazy:not(.loaded)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 240) {
      const src = el.dataset.bg;
      if (src) {
        el.style.backgroundImage = `url(${src})`;
        el.classList.add('loaded');
      }
    }
  });
}
window.addEventListener('scroll', lazyBg, {passive: true});
window.addEventListener('resize', lazyBg);
window.addEventListener('DOMContentLoaded', lazyBg);

// === Contact Form Validation & Submission ===
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const msgBox = form.querySelector('.form-msg');
    // Simple validation
    if (!name || !email || !message || !email.match(/^.+@.+\..+$/)) {
      msgBox.textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }
    // Simulate success (replace with your backend logic)
    msgBox.textContent = "Mensagem enviada! Responderemos em breve.";
    form.reset();
  });
});

// === Accessibility: Close mobile nav with esc ===
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  }
});

const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

if(toggle){
toggle.addEventListener("click",()=>{
menu.classList.toggle("active");
});
}