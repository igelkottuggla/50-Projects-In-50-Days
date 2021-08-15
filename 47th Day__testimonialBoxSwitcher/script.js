'use strict';

import testimonials from './data.js';

const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-img');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

let index = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[index];

    testimonial.textContent = text;
    userImage.src = photo;
    username.textContent = name;
    role.textContent = position;

    index++;

    if (index > testimonials.length - 1) {
        index = 0;
    }
}

updateTestimonial();

setInterval(updateTestimonial, 10000);
