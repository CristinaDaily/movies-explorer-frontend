import React from 'react';
import { useLocation } from 'react-router-dom'

import MoviesCard from '../MoviesCard/MoviesCard'; 
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({ isLoading, isNoResults, error , onLike, onDelete, moviesToShow }) {

  const location = useLocation();
  const savedMoviePage = location.pathname === '/saved-movies';

  
  return (
    <section className='movies'> 
      { error && <p className='movies__noresult'>{error}</p>} 
      {!isLoading && isNoResults && <p className='movies__noresult'>Ничего не найдено</p>} 
      {!isLoading ? (
        <div className={`movies__container ${savedMoviePage && 'movies__container_type_saved'}`}> 
        {moviesToShow.map((movie) => <MoviesCard movie={movie} onLike={onLike} onDelete={onDelete} key={movie.id || movie.movieId} />)}
        </div>
      ) : (
        <Preloader />
      )}  
    </section>
  );
}
export default MoviesCardList;