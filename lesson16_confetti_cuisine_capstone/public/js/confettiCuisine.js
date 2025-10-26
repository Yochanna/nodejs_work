// Confetti Cuisine JavaScript

console.log("🎉 Confetti Cuisine loaded!");

// Form validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('subscribeForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const zipCode = document.getElementById('zipCode').value.trim();

      if (!name || !email || !zipCode) {
        e.preventDefault();
        alert('Please fill in all required fields!');
        return false;
      }

      if (zipCode.length !== 5 || isNaN(zipCode)) {
        e.preventDefault();
        alert('Please enter a valid 5-digit ZIP code!');
        return false;
      }

      console.log('Form submitted:', { name, email, zipCode });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add animation to cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.course-card, .feature-card, .subscriber').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
  });
});

// Log page load time
window.addEventListener('load', function() {
  const loadTime = performance.now();
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});
