import React, { useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'; 
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({movieData}) {
      const [isLoading, setIsLoading] =  useState(false);
      const location = useLocation();
      const savedMoviePage = location.pathname === '/saved-movies';



    return (
        <section className='movies'>
            {!isLoading ? (
    <div className={`movies__container ${savedMoviePage && 'movies__container_type_saved'}`}>
      {movieData.map((movie) => (
        <MoviesCard name={movie.nameRU} duration={movie.duration} key={movie.id} />
      ))}
    </div>
      ) : (
        <Preloader />
      )}  
        
        </section>
    );
      }
export default MoviesCardList;