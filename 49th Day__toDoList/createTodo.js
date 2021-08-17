'use strict';

import updateListItems from './localStorage.js';

const todosUl = document.querySelector('.todos-list');
const input = document.querySelector('.input');

function addTodo(todo) {
    let todoText = input.value;

    if (todo) todoText = todo.text;

    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.classList.add('todo-item');

        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.textContent = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateListItems();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateListItems();
        });

        todosUl.appendChild(todoEl);
        input.value = '';

        updateListItems();
    }
}

export default addTodo;
