'use strict';
const content = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('.item');

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        content[index].classList.add('show');
    });
});

function hideAllContents() {
    content.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
    listItems.forEach((item) => item.classList.remove('active'));
}
