const loadText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg');

const Loading = {
  MIN: 0,
  MAX: 100,
};
const Opacity = {
  MIN: 0,
  MAX: 1,
};

const BlurEffect = {
  MIN: 0,
  MAX: 20,
};

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(
    load,
    Loading.MIN,
    Loading.MAX,
    Opacity.MAX,
    Opacity.MIN
  );
  bgImg.style.filter = `blur(${scale(
    load,
    Loading.MIN,
    Loading.MAX,
    BlurEffect.MAX,
    BlurEffect.MIN
  )}px)`;
}

//reference
//// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
