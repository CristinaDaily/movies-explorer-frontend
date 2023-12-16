import React, { useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'; 
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({movieData, isLoading, isNoResults, error, visibleCards}) {
      
      const location = useLocation();
      const savedMoviePage = location.pathname === '/saved-movies';

    return (
        <section className='movies'> 
        { error && <p className='movies__noresult'>{error}</p>} 
        {!isLoading && isNoResults && <p className='movies__noresult'>Ничего не найдено</p>} 
        {!isLoading ? (
        <div className={`movies__container ${savedMoviePage && 'movies__container_type_saved'}`}> 
        {movieData.slice(0, visibleCards).map((propsData) => <MoviesCard {...propsData} key={propsData.id}/>)}  
        </div>
      ) : (
        <Preloader />
      )}  
        
        </section>
    );
      }
export default MoviesCardList;