'use strict';

import getEl from './js/getEl.js';
import getRandomLocation from './js/getRandomLocation.js';

const startBtn = getEl('.start-btn');
const gameContainer = getEl('.game-container');
const timeEl = getEl('.time');
const scoreEl = getEl('.score');
const message = getEl('.message');
const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');

let score = 0;
let seconds = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedInsect = { src, alt };
        screens[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${
        selectedInsect.alt
    }" style="transform: rotate(${Math.random() * 360}deg)" />`;

    insect.addEventListener('click', catchInsect);
    gameContainer.appendChild(insect);
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 1000);
    addInsect();
}

function addInsect() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseTime() {
    let minutes = Math.floor(seconds / 60);
    let second = seconds % 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    second = second < 10 ? `0${second}` : second;

    timeEl.innerHTML = `Time: ${minutes}:${second}`;
    seconds++;
}

function increaseScore() {
    score++;

    if ((score >= 19 && score <= 20) || (score >= 30 && score <= 35)) {
        message.classList.add('visible');
        message.addEventListener('click', () =>
            message.classList.remove('visible')
        );
    }
    scoreEl.innerHTML = `Score: ${score}`;
}
