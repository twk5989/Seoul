
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
        entry.target.classList.add('animate-in');
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
      el.style.transform = 'translateY(-8px) scale(1.03)';
      el.style.boxShadow = '0 25px 50px rgba(34, 197, 94, 0.15)';
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0) scale(1)';
      el.style.boxShadow = '';
    });
  });

  // Initialize interactive effects
  initializeInteractiveEffects();
  initializeWeatherEffect();
});

function initializeInteractiveEffects() {
  // Add subtle parallax effect to clouds
  const cloudsElements = document.querySelectorAll('.clouds');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    cloudsElements.forEach(clouds => {
      clouds.style.transform = `translateX(${rate}px)`;
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

  // Add interactive sun effect
  const sun = document.querySelector('.sun');
  if (sun) {
    let isGlowing = false;
    sun.addEventListener('mouseenter', () => {
      if (!isGlowing) {
        isGlowing = true;
        sun.style.boxShadow = '0 0 60px rgba(255, 215, 0, 0.9)';
        sun.style.transform = 'scale(1.2)';
      }
    });
    
    sun.addEventListener('mouseleave', () => {
      isGlowing = false;
      sun.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
      sun.style.transform = 'scale(1)';
    });
  }
}

function initializeWeatherEffect() {
  // Create floating particles effect
  createFloatingParticles();
  
  // Add seasonal color changes based on time
  const hour = new Date().getHours();
  const body = document.body;
  
  if (hour >= 6 && hour < 12) {
    // Morning - fresh green tones
    body.classList.add('morning-theme');
  } else if (hour >= 12 && hour < 18) {
    // Afternoon - warm tones
    body.classList.add('afternoon-theme');
  } else if (hour >= 18 && hour < 21) {
    // Evening - golden tones
    body.classList.add('evening-theme');
  }
}

function createFloatingParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'floating-particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  `;
  
  document.body.appendChild(particleContainer);
  
  // Create leaf particles
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createParticle(particleContainer);
    }, i * 2000);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  const leafEmojis = ['🍃', '🌸', '🌺', '🦋', '✨'];
  const emoji = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
  
  particle.textContent = emoji;
  particle.style.cssText = `
    position: absolute;
    font-size: ${Math.random() * 10 + 15}px;
    left: ${Math.random() * 100}%;
    top: -50px;
    opacity: 0.7;
    animation: floatDown ${Math.random() * 10 + 15}s linear infinite;
    transform: rotate(${Math.random() * 360}deg);
  `;
  
  if (!document.getElementById('floatDownStyle')) {
    const style = document.createElement('style');
    style.id = 'floatDownStyle';
    style.textContent = `
      @keyframes floatDown {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0.7;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  container.appendChild(particle);
}