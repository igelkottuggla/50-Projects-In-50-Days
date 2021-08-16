const imgContainer = document.querySelector('.image-container');
const rowsValue = document.querySelector('.amount-input');
const getImgsBtn = document.querySelector('.btn');

const unsplashURL = 'https://source.unsplash.com/random/';
const imagesPerRow = 3;

getImgsBtn.addEventListener('click', () => {
    imgContainer.innerHTML = '';
    const rows = rowsValue.value;
    for (let i = 0; i < rows * imagesPerRow; i++) {
        const img = document.createElement('img');
        img.src = `${unsplashURL}${getRandomSize()}`;
        imgContainer.appendChild(img);
    }
});

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}
