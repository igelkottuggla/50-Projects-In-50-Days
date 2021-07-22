const toggleBtns = document.querySelectorAll('.faq-toggle');

if (toggleBtns) {
  toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.parentElement.classList.toggle('active');
    });
  });
}
