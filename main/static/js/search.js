document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector('.button-container .button:nth-child(1)');
  const searchModal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeSearch');
  const searchForm = document.getElementById('searchForm');
  const resultsContainer = document.getElementById('searchResults');
  const searchInput = searchForm.querySelector('input[name="q"]'); //자동 연관 검색처리


  if (searchBtn && searchModal && closeBtn && searchForm) {
    // 검색창 열기 부분
    searchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      setTimeout(() => {
        searchInput.focus(); // 사용자 경험 향상
      }, 100);
    });

    // 검색창 닫기 부분
    closeBtn.addEventListener('click', () => {
      searchModal.classList.add('hidden');
      resultsContainer.innerHTML = ''; // 결과 초기화
    });

    //자동 연관 검색: 사용자가 입력할 때마다 fetch 요청
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.trim();

      if (query.length < 2) {
        resultsContainer.innerHTML = '<p class="text-gray-500">2글자 이상 입력해주세요.</p>';
        return;
      }

      fetch(`/search/?q=${encodeURIComponent(query)}`, {  //Ajax 요청
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
        .then(response => response.text())  //text() → json()으로 변경
        .then(data => {
          resultsContainer.innerHTML = data;
        })
        .catch(error => {
          console.error('자동완성 실패:', error);
          resultsContainer.innerHTML = '<p class="text-red-500">검색 중 오류 발생</p>';
        });
    });

    //submit 검색 처리 (엔터 눌렀을 때에도 작동)
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(searchForm);
      const query = formData.get('q').trim();

      if (query.length < 2) {
        resultsContainer.innerHTML = '<p class="text-gray-500">2글자 이상 입력해주세요.</p>';
        return;
      }

      fetch(`/search/?q=${encodeURIComponent(query)}`, {      //Ajax 요청입니다
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
        .then(response => response.text())
        .then(data => {
          resultsContainer.innerHTML = data;
        })
        .catch(error => {
          console.error('검색 실패:', error);
          resultsContainer.innerHTML = '<p class="text-red-500">검색 중 오류가 발생했습니다.</p>';
        });
    });
  }
});