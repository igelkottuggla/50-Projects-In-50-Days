export function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
