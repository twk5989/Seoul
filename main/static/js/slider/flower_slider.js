
    let currentIndex = 2; // 가운데 카드부터 시작

    function createCard(place, index) {
      const card = document.createElement('div');
      const isCenter = index === currentIndex;
      const cardClass = isCenter ? 'center' : 'side';
      
      card.className = `card ${cardClass} bg-white rounded-2xl shadow-lg overflow-hidden relative`;
      card.style.width = '280px';
      card.style.height = '360px';
      
      card.innerHTML = `
        <div class="relative h-full">
          <img src="${place.image}" alt="${place.name}" class="w-full h-full object-cover">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 class="text-white font-bold text-lg">${place.name}</h3>
          </div>
        </div>
      `;
      
      if (isCenter) {
        card.addEventListener('click', () => {
          window.location.href = place.url;
        });
      }
      
      return card;
    }

    function renderCards() {
      const slider = document.getElementById('cardSlider');
      slider.innerHTML = '';
      
      // 5개 카드 표시 (현재 인덱스 기준으로 -2, -1, 0, +1, +2)
      for (let i = -2; i <= 2; i++) {
        let index = (currentIndex + i + places.length) % places.length;
        const card = createCard(places[index], currentIndex + i);
        slider.appendChild(card);
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % places.length;
      renderCards();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + places.length) % places.length;
      renderCards();
    }

    // 이벤트 리스너
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // 슬라이드 버튼 네비게이션
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });

    // 초기 렌더링
    renderCards();