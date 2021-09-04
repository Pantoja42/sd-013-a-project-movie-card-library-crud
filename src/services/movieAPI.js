import data from './movieData';

localStorage.setItem('movies', JSON.stringify(data));

const readMovies = () => JSON.parse(localStorage.getItem('movies'));
const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

const TIMEOUT = 2000;
const SUCCESS_STATUS = 'OK';

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso mais futuramente
// --------------------------------------------------------------------

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

// Função utilizada no requisito 2 - Page 'MovieList.js' - retorna uma promise
export const getMovies = () => (
  new Promise((resolve) => {
    const movies = readMovies();
    simulateRequest(movies)(resolve);
  })
);

// Função utilizada no requisito 4 - Page 'MovieDetails.js'
export const getMovie = (movieId) => {
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));
  return new Promise((resolve) => {
    simulateRequest(movie)(resolve);
  });
};

// Função utilizado no requisito 5 - Page 'EditMovie.js'
export const updateMovie = (updatedMovie) => (
  new Promise((resolve) => {
    const movies = readMovies().map((movie) => {
      if (movie.id === parseInt(updatedMovie.id, 10)) {
        return { ...movie, ...updatedMovie };
      }
      return movie;
    });
    saveMovies(movies);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

// Função utilizado no requisito 6 - Page 'NewMovie.js'
export const createMovie = (movieData) => (
  new Promise((resolve) => {
    let movies = readMovies();
    const nextId = movies[movies.length - 1].id + 1;
    const newMovie = { ...movieData, id: nextId };
    movies = [...movies, newMovie];
    saveMovies(movies);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

// Função utilizada no requisito 7 - Page 'MovieDetails.js'
export const deleteMovie = (movieId) => {
  let movies = readMovies();
  movies = movies.filter((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    simulateRequest({ status: SUCCESS_STATUS })(resolve);
  });
};
