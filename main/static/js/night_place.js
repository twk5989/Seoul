let currentIndex = 0;
let slides = [];

function loadData(구이름) {
    const url = 구이름 === "전체" ? '/api/night_table/' : `/api/night_table/?자치구=${구이름}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('night_table-data-list');
            const countSpan = document.querySelector('.result-count span');
            container.innerHTML = '';
            slides = [];
            currentIndex = 0;

            countSpan.textContent = data.length;

            if (data.length === 0) return;

            // 슬라이드들을 미리 만들어 놓음
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'card-slide';
                div.innerHTML = `
                    <div class="card-image" style="background-image: url('${item.대표이미지}');"></div>
                    <p class="card-title">${item.장소명}</p>
                    <p class="card-body">${item.분류}</p>
                    <p class="footer">
                        Written by <span class="by-name">${item.자치구}</span> |
                        <a href="/night/${item.id}/" class="date">자세히 보기</a>
                    </p>
                `;
                slides.push(div);
            });

            renderSlides();
        });
}

function renderSlides() {
    const container = document.getElementById('night_table-data-list');
    container.innerHTML = '';

    // 현재 인덱스부터 최대 2개까지만 보여줌
    for (let i = currentIndex; i < currentIndex + 2 && i < slides.length; i++) {
        container.appendChild(slides[i]);
    }

    // 버튼 비활성화 상태 조절
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex + 2 >= slides.length;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 2;
        renderSlides();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex + 2 < slides.length) {
        currentIndex += 2;
        renderSlides();
    }
});

loadData("전체");
