const carousel = document.querySelector('.carousel');

if (carousel) {
  const imgContainer = document.getElementById('imgs');
  const images = document.querySelectorAll('#imgs img');
  const prevBtn = document.getElementById('left');
  const nextBtn = document.getElementById('right');

  let index = 0;
  let interval = setInterval(run, 2000);

  function run() {
    index++;
    changeImage();
  }

  function changeImage() {
    if (index > images.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = images.length - 1;
    }

    imgContainer.style.transform = `translateX(${-index * 500}px)`;
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  }

  prevBtn.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
  });
}
