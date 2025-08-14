
document.addEventListener('DOMContentLoaded', function() {
  initializeScrollAnimations();
  initializeInteractiveEffects();
  initializeImageGallery();
  initializeFloatingElements();
  
  // Page load complete effects
  setTimeout(() => {
    document.body.classList.add('page-loaded');
  }, 100);
});

// 스크롤 애니메이션 초기화
function initializeScrollAnimations() {
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

  // 슬라이드 업 애니메이션 요소들 관찰
  document.querySelectorAll('.slide-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // 스크롤 진행 표시기
  createScrollProgress();
}

// 스크롤 진행 표시기 생성
function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #22c55e, #16a34a, #059669);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// 인터랙티브 효과 초기화
function initializeInteractiveEffects() {
  // 리플 효과
  document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', function(e) {
      createRipple(e, this);
    });
  });

  // 패럴랙스 효과
  window.addEventListener('scroll', handleParallax);

  // 마우스 따라다니는 효과
  initializeMouseFollower();

  // 스무스 스크롤
  initializeSmoothScroll();

  // 키보드 네비게이션
  initializeKeyboardNavigation();
}

// 리플 효과 생성
function createRipple(event, element) {
  const rect = element.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// 패럴랙스 효과 처리
function handleParallax() {
  const scrolled = window.pageYOffset;
  
  // 플로팅 요소들
  document.querySelectorAll('.floating-elements').forEach(element => {
    const rate = scrolled * -0.5;
    element.style.transform = `translateY(${rate}px)`;
  });

  // 히어로 배경
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const rate = scrolled * 0.3;
    heroBg.style.transform = `translateY(${rate}px)`;
  }
}

// 마우스 팔로워 초기화
function initializeMouseFollower() {
  const follower = document.createElement('div');
  follower.className = 'mouse-follower';
  follower.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(34, 197, 94, 0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(follower);

  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 10 + 'px';
    follower.style.top = e.clientY - 10 + 'px';
  });

  // 호버 가능한 요소들에 대한 효과
  document.querySelectorAll('a, button, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.transform = 'scale(2)';
      follower.style.background = 'rgba(34, 197, 94, 0.5)';
    });

    el.addEventListener('mouseleave', () => {
      follower.style.transform = 'scale(1)';
      follower.style.background = 'rgba(34, 197, 94, 0.3)';
    });
  });
}

// 스무스 스크롤 초기화
function initializeSmoothScroll() {
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

// 키보드 네비게이션 초기화
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // ESC 키로 모달 닫기
    if (e.key === 'Escape') {
      closeModal();
    }
    
    // 화살표 키로 갤러리 네비게이션
    if (document.getElementById('imageModal').style.display === 'block') {
      const images = document.querySelectorAll('.gallery-item img');
      const currentSrc = document.getElementById('modalImage').src;
      let currentIndex = Array.from(images).findIndex(img => img.src === currentSrc);
      
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('modalImage').src = images[currentIndex].src;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById('modalImage').src = images[currentIndex].src;
      }
    }
  });
}

// 이미지 갤러리 초기화
function initializeImageGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  
  galleryItems.forEach((img, index) => {
    // 레이지 로딩 효과
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
            imageObserver.unobserve(img);
          }
        });
      });

      img.style.opacity = '0';
      img.style.transform = 'scale(0.8)';
      img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      imageObserver.observe(img);
    }

    // 터치 지원
    let touchStartX = 0;
    let touchStartY = 0;

    img.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    });

    img.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) < 50 && Math.abs(diffY) < 50) {
        openModal(img);
      }
    });
  });
}

// 플로팅 요소들 초기화
function initializeFloatingElements() {
  // 동적 플로팅 파티클 생성
  createFloatingParticles();
  
  // 계절별 테마 적용
  applySeasonalTheme();
}

// 플로팅 파티클 생성
function createFloatingParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'floating-particles-container';
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
  
  // 파티클 생성 간격
  setInterval(() => {
    if (Math.random() < 0.3) {
      createParticle(particleContainer);
    }
  }, 3000);
}

// 개별 파티클 생성
function createParticle(container) {
  const particles = ['🌿', '🍃', '🌸', '🦋', '✨', '🌺', '💫'];
  const particle = document.createElement('div');
  
  particle.textContent = particles[Math.floor(Math.random() * particles.length)];
  particle.style.cssText = `
    position: absolute;
    font-size: ${Math.random() * 8 + 12}px;
    left: ${Math.random() * 100}%;
    top: -50px;
    opacity: 0.6;
    animation: floatUp ${Math.random() * 15 + 10}s linear;
    transform: rotate(${Math.random() * 360}deg);
  `;
  
  // 애니메이션 추가
  if (!document.getElementById('floatUpStyle')) {
    const style = document.createElement('style');
    style.id = 'floatUpStyle';
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0px) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.6;
        }
        90% {
          opacity: 0.6;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  container.appendChild(particle);
  
  // 파티클 제거
  setTimeout(() => {
    particle.remove();
  }, 25000);
}

// 계절별 테마 적용
function applySeasonalTheme() {
  const month = new Date().getMonth();
  const body = document.body;
  
  if (month >= 2 && month <= 4) {
    // 봄 (3-5월)
    body.classList.add('spring-theme');
  } else if (month >= 5 && month <= 7) {
    // 여름 (6-8월)
    body.classList.add('summer-theme');
  } else if (month >= 8 && month <= 10) {
    // 가을 (9-11월)
    body.classList.add('autumn-theme');
  } else {
    // 겨울 (12-2월)
    body.classList.add('winter-theme');
  }
}

// 모달 관련 함수들
function openModal(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  modal.style.display = 'block';
  modalImg.src = img.src;
  
  // 모달 열릴 때 애니메이션
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);
  
  // 바디 스크롤 비활성화
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
  
  // 바디 스크롤 활성화
  document.body.style.overflow = 'auto';
}

// 유틸리티 함수들
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 성능 최적화된 스크롤 핸들러
const optimizedParallax = throttle(handleParallax, 16);
window.addEventListener('scroll', optimizedParallax);

// 페이지 언로드 시 정리
window.addEventListener('beforeunload', () => {
  // 이벤트 리스너 정리
  window.removeEventListener('scroll', optimizedParallax);
  
  // 타이머 정리
  const intervals = window.setInterval(() => {}, 1000);
  for (let i = 1; i < intervals; i++) {
    window.clearInterval(i);
  }
});

// 에러 핸들링
window.addEventListener('error', (e) => {
  console.error('스크립트 에러:', e.error);
});

// 터치 장치 지원
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');
}