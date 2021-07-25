const smallCups = document.querySelectorAll('.small-cup');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const BIG_CUP_HEIGHT = 330;
const ML_IN_SMALL_CUP = 250;
const ML_IN_LITER = 1000;
const DAYLY_GOAL = 2;

updateBigCup();

smallCups.forEach((smallCup, index) => {
  smallCup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling.classList.contains('full')
  ) {
    index--;
  }
  smallCups.forEach((smallCup, indexForFilling) => {
    if (indexForFilling <= index) {
      smallCup.classList.add('full');
    } else {
      smallCup.classList.remove('full');
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.small-cup.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * BIG_CUP_HEIGHT}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${
      DAYLY_GOAL - (ML_IN_SMALL_CUP * fullCups) / ML_IN_LITER
    }L`;
  }
}
