import checkImagePoster from './checkImagePoster.js';
import getClassByRate from './checkRating.js';

const moviesContainer = document.getElementById('main-section');

function showMovies(movies) {
  moviesContainer.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('article');
    movieEl.classList.add('movie');
    movieEl.innerHTML = ` 
      <img src="${checkImagePoster(poster_path)}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
          </div>
        `;
    // course initial version
    //<img src="${IMG_PATH + poster_path}" alt="${title}">
    moviesContainer.appendChild(movieEl);
  });
}

export default showMovies;
