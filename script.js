// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(15,15,35,0.98)';
  } else {
    navbar.style.background = 'rgba(15,15,35,0.95)';
  }
});

// Animate stats
function animateStats() {
  const stats = document.querySelectorAll('.hero-stats span');
  stats.forEach(stat => {
    const number = parseInt(stat.textContent);
    let current = 0;
    const increment = number / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        stat.innerHTML = number + ' <small>' + stat.querySelector('small').textContent + '</small>';
        clearInterval(timer);
      } else {
        stat.innerHTML = Math.floor(current) + ' <small>' + stat.querySelector('small').textContent + '</small>';
      }
    }, 30);
  });
}

// Form submit
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Messaggio inviato! Ti rispondo entro 24h.');
  e.target.reset();
});

// Animate skill bars
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar').forEach(bar => {
        bar.style.width = bar.style.width;
      });
    }
  });
});

document.querySelectorAll('.skill-bars').forEach(el => observer.observe(el));

// Trigger hero stats on load
window.addEventListener('load', animateStats);
