
document.addEventListener('DOMContentLoaded', function() {
  // Enhanced animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Initialize slide-up animations
  document.querySelectorAll('.slide-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // Smooth hover effects for hover-grow elements
  document.querySelectorAll('.hover-grow').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-5px) scale(1.02)';
      el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0) scale(1)';
      el.style.boxShadow = '';
    });
  });

  // Additional interactive effects
  initializeInteractiveEffects();
});

function initializeInteractiveEffects() {
  // Add subtle parallax effect to stars
  const starsElements = document.querySelectorAll('.stars');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    starsElements.forEach(stars => {
      stars.style.transform = `translateY(${rate}px)`;
    });
  });

  // Add click ripple effect to cards
  document.querySelectorAll('.hover-grow').forEach(card => {
    card.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Utility function for fade-in effect
function fadeInElement(element, duration = 800) {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-out`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
}

// Initialize any additional effects when page is fully loaded
window.addEventListener('load', function() {
  // Add loading complete class for additional styling
  document.body.classList.add('page-loaded');
  
  // Trigger fade-in for any elements that need it
  document.querySelectorAll('.fade-in').forEach((element, index) => {
    setTimeout(() => {
      fadeInElement(element);
    }, index * 200);
  });
});