'use strict';

const range = document.getElementById('range');

range.addEventListener('input', (event) => {
    const value = +event.target.value;
    const label = event.target.nextElementSibling;

    const rangeWidth = getComputedStyle(event.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidt = +labelWidth.substring(0, labelWidth.length - 2);

    const max = +event.target.max;
    const min = +event.target.min;

    const left =
        value * (numWidth / max) -
        numLabelWidt / 2 +
        scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.textContent = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
