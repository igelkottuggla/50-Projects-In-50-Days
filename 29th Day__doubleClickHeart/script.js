const loveMeContainer = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

loveMeContainer.addEventListener('click', (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(event);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

// an easier way with dblclick. Not from the course
// loveMeContainer.addEventListener('dblclick', (event) => {
//   createHeart(event);
// });

const createHeart = (event) => {
  const heartIcon = document.createElement('i');
  heartIcon.classList.add('fas');
  heartIcon.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  const xInsideImage = x - leftOffset;
  const yInsideImage = y - topOffset;

  heartIcon.style.top = `${yInsideImage}px`;
  heartIcon.style.left = `${xInsideImage}px`;

  loveMeContainer.appendChild(heartIcon);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heartIcon.remove(), 1000);
};
