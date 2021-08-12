'use stict';

const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating;

ratingsContainer.addEventListener('click', (event) => {
    removeActive();
    selectedRating = event.target.closest('.rating').dataset.rating;
    event.target.closest('.rating').classList.add('active');

    //original code
    // if (e.target.parentNode.classList.contains('rating')) {
    //     removeActive();
    //     e.target.parentNode.classList.add('active');
    //     selectedRating = e.target.nextElementSibling.innerHTML;
    // }
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
    const newRatings = [...ratings];
    for (let newRating of newRatings) {
        newRating.classList.remove('active');
    }

    // ratings.forEach((rating) => rating.classList.remove('active'));

    //initial code from the lesson
    // for (let i = 0; i < ratings.length; i++) {
    //     ratings[i].classList.remove('active');
    // }
}
