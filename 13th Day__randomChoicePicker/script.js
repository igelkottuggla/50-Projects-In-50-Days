const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const ENTER_KEY = 'Enter';
const pickingElTimes = 30;

textarea.focus();

const createTags = (input) => {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');

    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add('highlight');
};

const unHighlightTag = (tag) => {
  tag.classList.remove('highlight');
};

const randomSelect = () => {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, pickingElTimes * 100);
};

textarea.addEventListener('keyup', (eventObj) => {
  createTags(eventObj.target.value);
  if (eventObj.key === ENTER_KEY) {
    setTimeout(() => {
      eventObj.target.value = '';
    }, 10);
    randomSelect();
  }
});
