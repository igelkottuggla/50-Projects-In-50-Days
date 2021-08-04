const textEl = document.getElementById('text');
const speedControlEl = document.getElementById('speed');

const text = 'We love programming!';

let index = 1;
let speed = 300 / speedControlEl.value;

writeText();

function writeText() {
  textEl.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
}

speedControlEl.addEventListener(
  'input',
  (event) => (speed = 300 / event.target.value)
);
