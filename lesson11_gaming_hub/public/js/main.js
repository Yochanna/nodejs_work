// Gaming Hub - Client-side JavaScript

document.addEventListener('DOMContentLoaded', function() {
  console.log('Gaming Hub loaded successfully!');

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add click animation to play buttons
  const playButtons = document.querySelectorAll('.play-btn');
  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Game launching! (Demo only)');
    });
  });

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const email = this.querySelector('input[type="email"]');
      if (email && !email.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address');
      }
    });
  });

  console.log('Static files (CSS, JS, Images) loaded from /public directory');
});
