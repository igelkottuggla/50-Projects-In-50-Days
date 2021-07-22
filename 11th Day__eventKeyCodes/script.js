const insert = document.getElementById('insert');

window.addEventListener('keydown', (eventObj) => {
  insert.innerHTML = `
      <div class="key">
          ${eventObj.key === ' ' ? 'Space' : eventObj.key}
          <small>event.key</small>
      </div>
      <div class="key">
          ${eventObj.keyCode}
          <small>event.keyCode</small>
      </div>
      <div class="key">
          ${eventObj.code}
          <small>event.code</small>
      </div>
      <div class="key">
              press any key to get the keyCode and code
            </div>
      `;
});
