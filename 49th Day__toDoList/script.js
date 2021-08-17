'use srtict';

import addTodo from './createTodo.js';

const form = document.querySelector('.form');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => addTodo(todo));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTodo();
});
