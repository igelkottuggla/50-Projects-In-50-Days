'use strict';

const boxesContainer = document.querySelector('.boxes');
const magicBtn = document.querySelector('.magic');

const BOX_SIZE = 125;
const AMOUNT_OF_BOXES = 4;

magicBtn.addEventListener('click', () =>
    boxesContainer.classList.toggle('big')
);

function createBoxes() {
    for (
        let horizontalBoxes = 0;
        horizontalBoxes < AMOUNT_OF_BOXES;
        horizontalBoxes++
    ) {
        for (
            let verticalBoxes = 0;
            verticalBoxes < AMOUNT_OF_BOXES;
            verticalBoxes++
        ) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-verticalBoxes * BOX_SIZE}px ${
                -horizontalBoxes * BOX_SIZE
            }px`;
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();
