import { updateLocalStorage } from './localStorage.js';

const notesContainer = document.querySelector('.notes-container');

function addNewNote(text = '') {
  const note = document.createElement('article');
  note.classList.add('note');

  note.innerHTML = `
    <header class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </header>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea ${text ? 'hidden' : ''}></textarea>
    `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (event) => {
    const { value } = event.target;
    main.innerHTML = marked(value);
    updateLocalStorage();
  });

  notesContainer.appendChild(note);
}

export default addNewNote;
