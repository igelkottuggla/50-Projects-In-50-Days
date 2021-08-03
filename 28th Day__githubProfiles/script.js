const API_URL = 'https://api.github.com/users/';
const searchForm = document.querySelector('.search-form');
const searchInput = document.getElementById('search');
const cardContainer = document.getElementById('card-container');

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    createUserCar(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('No profile with this user name');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}

function createErrorCard(message) {
  cardContainer.innerHTML = '';

  const cardHTML = `
    <article class="card">
    <h1>${message}</h1>
    </article>
    `;
  cardContainer.insertAdjacentHTML('afterbegin', cardHTML);
}

function createUserCar(user) {
  cardContainer.innerHTML = '';

  const { avatar_url, name, login, bio, followers, following, public_repos } =
    user;
  const userID = name || login;
  const userBio = bio ? `<p>${bio}</p>` : '';
  const cardHTML = `
            <article class="card">
            <div>
                <img src="${avatar_url}" alt="${name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${userID}</h2>
                <p>${userBio}</p>
                <ul>
                <li>${followers} <strong>Followers</strong></li>
                <li>${following} <strong>Following</strong></li>
                <li>${public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
            </article>
        `;

  cardContainer.insertAdjacentHTML('afterbegin', cardHTML);
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.textContent = repo.name;

    reposEl.appendChild(repoEl);
  });
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = searchInput.value;

  if (user) {
    getUser(user);
    searchInput.value = '';
  }
});
