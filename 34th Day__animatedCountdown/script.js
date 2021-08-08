const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replayBtn = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
  nums.forEach((num) => {
    num.classList.value = '';
  });
  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, index) => {
    const nexToLast = nums.length - 1;

    num.addEventListener('animationend', (event) => {
      if (event.animationName === 'goIn' && index !== nexToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (event.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replayBtn.addEventListener('click', () => {
  resetDOM(), runAnimation();
});
