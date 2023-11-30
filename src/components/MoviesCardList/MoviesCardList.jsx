import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'; 
import './MoviesCardList.css';
import movies from '../../movies'
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
      const [isLoading, setIsLoading] =  useState(false);


    return (
        <section className='movies'>
            <div className='movies__container'>
            {!isLoading ? (
        movies.map((movie) => (
          <MoviesCard name={movie.nameRU} duration={movie.duration} key={movie.id} />
        ))
      ) : (
        <Preloader />
      )}  
            </div>
        </section>
    );
      }
export default MoviesCardList;