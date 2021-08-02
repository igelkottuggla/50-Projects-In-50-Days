const getEl = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  else {
    throw newError(`Check the selection, ${selection} doesn't exist`);
  }
};

const sliderContainer = getEl('.slider-container');

if (sliderContainer) {
  const slideRight = getEl('.right-slide');
  const slideLeft = getEl('.left-slide');
  const upBtn = getEl('.up-button');
  const downBtn = getEl('.down-button');
  const slidesLength = slideRight.querySelectorAll('div').length;

  let activeSlideIndex = 0;

  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

  upBtn.addEventListener('click', () => changeSlide('up'));
  downBtn.addEventListener('click', () => changeSlide('down'));

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
      }
    } else if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
      }
    }

    slideRight.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;

    slideLeft.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  };
}
