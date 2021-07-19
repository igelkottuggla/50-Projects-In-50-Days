const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn');
const input = document.querySelector('.input');

if (search) {
  btnSearch.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
  });
}
