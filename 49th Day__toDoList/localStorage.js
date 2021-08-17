'use strict';

function updateListItems() {
    const todosElements = document.querySelectorAll('.todo-item');
    const todos = [];

    todosElements.forEach((todoEl) => {
        todos.push({
            text: todoEl.textContent,
            completed: todoEl.classList.contains('completed'),
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

export default updateListItems;
