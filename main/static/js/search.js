document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector('.button-container .button:nth-child(1)');
  const searchModal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeSearch');
  const searchForm = document.getElementById('searchForm');
  const resultsContainer = document.getElementById('searchResults');

  if (searchBtn && searchModal && closeBtn && searchForm) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      searchModal.classList.add('hidden');
      resultsContainer.innerHTML = ''; // 결과 초기화
    });

    // AJAX 검색 처리
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault(); // 기본 submit 막기
      const formData = new FormData(searchForm);
      const query = formData.get('q');

      fetch(`/search/?q=${encodeURIComponent(query)}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest' // Django가 AJAX로 인식함
        }
    })
        .then(response => response.text())
        .then(data => {
          resultsContainer.innerHTML = data.html;
        })
        .catch(error => {
          console.error('검색 실패:', error);
          resultsContainer.innerHTML = '<p class="text-red-500">검색 중 오류가 발생했습니다.</p>';
        });
    });
  }
});
