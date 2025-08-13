let currentIndex = 2;
let places = [];

function createCard(place, index) {
  const isCenter = index === currentIndex;
  const cardClass = isCenter ? 'center' : 'side';

  const card = document.createElement('div');
  card.className = `card ${cardClass} bg-white rounded-2xl shadow-lg overflow-hidden relative`;
  card.style.width = '280px';
  card.style.height = '360px';

  card.innerHTML = `
    <div class="relative h-full">
      <img src="${place.대표이미지}" alt="${place.장소명}" class="w-full h-full object-cover">
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 class="text-white font-bold text-lg">${place.장소명}</h3>
      </div>
    </div>
  `;

  if (isCenter) {
    card.addEventListener('click', () => {
      window.location.href = `/night/${place.id}`;
    });
  }

  return card;
}

function renderCards() {
  const slider = document.getElementById('cardSlider');
  slider.innerHTML = '';

  if (places.length === 0) {
    slider.innerHTML = `<p class="text-white text-center text-lg">해당 지역의 야경 명소가 없습니다.</p>`;
    document.getElementById('nightCount').textContent = 0;
    return;
  }

  for (let i = -2; i <= 2; i++) {
    let index = (currentIndex + i + places.length) % places.length;
    const card = createCard(places[index], currentIndex + i);
    slider.appendChild(card);
  }

  document.getElementById('nightCount').textContent = places.length;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % places.length;
  renderCards();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + places.length) % places.length;
  renderCards();
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

function loadPlaces(region = "") {
  const param = region ? `?자치구=${region}` : "";
  fetch(`/api/night_place/${param}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      places = data;
      currentIndex = 2;  // 초기화
      renderCards();
    })
    .catch(err => {
      console.error("데이터 로딩 실패:", err);
    });
}

// 드롭다운 이벤트
document.getElementById('district-select').addEventListener('change', (e) => {
  loadPlaces(e.target.value);
});

// 최초 로딩
loadPlaces();
