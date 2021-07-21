const jokeBtn = document.getElementById('joke-btn');
const jokeElement = document.getElementById('joke');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

//using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();

  jokeElement.textContent = data.joke;
}
