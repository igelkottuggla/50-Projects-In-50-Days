import addNewNote from './createNote.js';

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote());
