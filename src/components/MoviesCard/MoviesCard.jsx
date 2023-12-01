import React,  { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import movie1 from '../../images/movie1.png';
import './MoviesCard.css';



function MoviesCard({name, duration}) {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();

  const moviePage = location.pathname === '/movies';
  const savedMoviesPage =location.pathname ==='/saved-movies';

  const handleMouseEnter = () => {
    if (savedMoviesPage) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


    return (
        <article 
        className='element'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <img
            className='element__image'
            src={movie1}
            alt='Обложка фильма'
          />
        <div className='element__wrapper'>
          <h2 className='element__movie-name'>{name}</h2>
          {moviePage && <button
              type='button'
              className='element__like-btn element__like-btn_active'
            ></button>}
          {savedMoviesPage && (
           <button
              type='button'
              className= {`element__deleteCard-btn ${isHovered &&'element__deleteCard-btn_active'}`}
            ></button>)}  
            
        </div>
        <div className='element__line'></div>
            <p className='element__duration'>{duration}</p>
        
      </article>
    );
}

export default MoviesCard;