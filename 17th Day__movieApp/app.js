import showMovies from './utils/showMovies.js';

const form = document.getElementById('form');
const search = document.getElementById('search');

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=26fdf1661722066b1132204c53d4adbe&page=1';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=26fdf1661722066b1132204c53d4adbe&page&query="';

//get initial Movies
getMovies(API_URL);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data.results);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
