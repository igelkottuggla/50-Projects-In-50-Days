const form = document.querySelector('.form');

if (form) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const labels = form.querySelectorAll('.form-control label');
  const submitBtn = form.querySelector('.btn');

  labels.forEach((label) => {
    label.innerHTML = label.innerHTML
      .split('')
      .map(
        (letter, index) =>
          `<span style="transition-delay:${index * 50}ms">${letter}</span>`
      )
      .join('');
  });

  email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('I am expecting an e-mail address!');
      form.classList.add('submitted');
    } else {
      email.setCustomValidity('');
    }
  });

  password.addEventListener('input', () => {
    if (password.value.length === 0) {
      form.classList.add('submitted');
    } else {
      password.setCustomValidity('');
    }
  });

  form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
      event.preventDefault();
      form.classList.add('submitted');
    }

    if (!password.validity.valid) {
      event.preventDefault();
      form.classList.add('submitted');
    }
  });
}
