import { SHORT_MOVIES } from './constants';

export function filtereMoviesFromSearch(movies, searchQuery) {
  return movies.filter((movie) => {
  return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
  });
}

export const filterShortMovies = (movies, shortFilmChecked) => {
  if (shortFilmChecked) {
    return movies.filter((movie) => movie.duration
      <= SHORT_MOVIES);
  }
  return movies;
};
