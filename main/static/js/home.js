const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
const slides = document.querySelectorAll('.slide');

const titles = [
  "낭만이 가득한 여행",
  "벚꽃이 피는 4월",
  "해가 지면 더 멋있는 장소"
];

const descriptions = [
  ["주말에 낭만가득 <br>서울 여행지 추천!",
    `<a href="/trip_course/" style="color:rgb(0, 6, 12); text-decoration: none;">자세히 보기</a>`
  ],
  ["서울 벚꽃 명소<br>우리가 추천해 줄게!",
    `<a href="/flower_place/" style="color:rgb(0, 6, 12); text-decoration: none;">자세히 보기</a>`
  ],
  ["저녁 데이트를 위한<br>야경코스 추천!",
    `<a href="/night_place/" style="color: rgb(0, 6, 12); text-decoration: none;">자세히 보기</a>`
  ]
];

const titleEl = document.getElementById("title");
const desc1El = document.getElementById("desc1");
const desc2El = document.getElementById("desc2");

const slideColors = [  
  "#abd7ee",  // 슬라이드 0
  "#ffcccc",  // 슬라이드 1
  "#898a8b",  // 슬라이드 2
];

let currentIndex = 0;

function updateText(index) {
  titleEl.textContent = titles[index];
  desc1El.innerHTML = descriptions[index][0];
  desc2El.innerHTML = descriptions[index][1];
}

function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
  updateText(index);
}

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

createDots();
updateText(0);
setInterval(nextSlide, 4000);


//슬라이드 색 변환 호풀 함수
function updateSlideColors() {
  const wrapper = document.querySelector('.home-wrapper');
  const navbar = document.getElementById('navbar'); // 여기 ID로 지정(menu의 nav)

  const color = slideColors[currentIndex];
  wrapper.style.backgroundColor = color;
  navbar.style.backgroundColor = color;
}
function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
  updateText(index);
  updateSlideColors();
}
