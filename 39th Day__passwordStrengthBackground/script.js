'use strict';

const password = document.getElementById('password');
const background = document.querySelector('.background');
const INITIAL_BLUR = 20;
const STEP = 2;

password.addEventListener('input', (event) => {
    const input = event.target.value;
    const length = input.length;

    const blurValue = INITIAL_BLUR - length * STEP;
    background.style.filter = `blur(${blurValue}px)`;
});
