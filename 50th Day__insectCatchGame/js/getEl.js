'use strict';

const getEl = (selection) => {
    const el = document.querySelector(selection);

    if (el) return el;
    else throw new Error(`there is no such element ${selection}`);
};

export default getEl;
