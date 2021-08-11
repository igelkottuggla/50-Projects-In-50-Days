'use strict';

const codeInputs = document.querySelectorAll('.code');
const DELETE_KEY = 'Delete';
const BCSPACE_KEY = 'Backspace';
codeInputs[0].focus();

codeInputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key >= 0 && event.key <= 9) {
            codeInputs[index].value = '';
            setTimeout(() => codeInputs[index + 1].focus(), 10);
        } else if (event.key === BCSPACE_KEY || event.key === DELETE_KEY) {
            setTimeout(() => codeInputs[index - 1].focus(), 10);
        }
    });
});
