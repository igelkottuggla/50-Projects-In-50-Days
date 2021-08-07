const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
const toasts = document.getElementById('toasts');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (event) => doTheTrick(event.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
      createNotification(`If it's good and cheap it can't be fast`);
    }

    if (cheap === theClickedOne) {
      good.checked = false;
      createNotification(`If it's fast and cheap it can't be good`);
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
      createNotification(`If it's good and fast it can't be cheap`);
    }
  }
}

function createNotification(message) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add('error');

  notif.textContent = message;
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
