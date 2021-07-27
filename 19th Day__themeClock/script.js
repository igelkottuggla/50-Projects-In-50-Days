const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const hourEl = get('.hour');
const minuteEl = get('.minute');
const secondEl = get('.second');
const timeEl = get('.time');
const dateEl = get('.date');
const toggleBtn = get('.toggle');
const MIN = 0;
const FULL_CIRCLE = 360;
const HOURS = 11;
const MIN_SEC = 59;

//reference
//// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

toggleBtn.addEventListener('click', (event) => {
  const html = get('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    event.target.textContent = 'Dark mode';
  } else {
    html.classList.add('dark');
    event.target.textContent = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.textContent = `${hoursForClock}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${weekdays[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
setTime();
setInterval(setTime, 1000);

function get(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  else {
    throw new Error(
      `There's no such ${selection} element. Please check one more time`
    );
  }
}
