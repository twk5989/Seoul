document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector('.button-container .button:nth-child(1)');
  const searchModal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeSearch');

  if (searchBtn && searchModal && closeBtn) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      searchModal.classList.add('hidden');
    });
  }
});
