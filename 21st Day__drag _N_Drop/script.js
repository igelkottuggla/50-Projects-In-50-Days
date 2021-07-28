const dragPic = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

dragPic.addEventListener('dragstart', dragStart);
dragPic.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 150);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(dragPic);
}
