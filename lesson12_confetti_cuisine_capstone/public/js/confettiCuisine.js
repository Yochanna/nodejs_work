// Confetti Cuisine - Client-side JavaScript

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎉 Confetti Cuisine loaded successfully!');

  // ENHANCEMENT: Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name.length < 2) {
        e.preventDefault();
        alert('Please enter a valid name (at least 2 characters)');
        return false;
      }

      if (!email.includes('@') || !email.includes('.')) {
        e.preventDefault();
        alert('Please enter a valid email address');
        return false;
      }

      console.log('Form submitted:', { name, email });
    });
  }

  // ENHANCEMENT: Smooth scroll for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ENHANCEMENT: Add hover effect to course cards
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderLeftWidth = '8px';
    });

    card.addEventListener('mouseleave', function() {
      this.style.borderLeftWidth = '4px';
    });
  });

  // ENHANCEMENT: Console message for developers
  console.log('%c📚 Confetti Cuisine', 'font-size: 20px; color: #ed4a0f; font-weight: bold;');
  console.log('%cBuilt with Express.js, EJS, and ❤️', 'font-size: 12px; color: #666;');

  // Log page load time
  window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
  });
});

// ENHANCEMENT: Simple animation for buttons
function animateButton(button) {
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
}

// Add click animation to all buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button, .button-secondary');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      animateButton(this);
    });
  });
});
