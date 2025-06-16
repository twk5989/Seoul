function setSearchInput(district) {
  const input = document.querySelector('.search-text');
  if (input) {
    input.value = district;
    input.focus();
  }
}