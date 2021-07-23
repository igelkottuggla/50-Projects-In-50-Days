const nav = document.getElementById('nav');

if (nav) {
  const toggleBtn = document.getElementById('toggle');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
