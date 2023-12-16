import React,  { useState} from 'react';
import { useLocation} from 'react-router-dom';
import { saveMovie } from '../../utils/MainApi';

import './MoviesCard.css';



function MoviesCard(movie) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    console.log('id',movie.id, movie)
    if(isLiked){
     console.log('delete movie')
    } else {
      saveMovie (movie);
      console.log('savemovie')
    }
    

  }

  const showDudation =(duration) =>{
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const durationToShow = hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
    return durationToShow; 
  }

  const movieLikeButtonClassName = `element__like-btn ${
    isLiked && 'element__like-btn_active'
  }`;


    return (
        <article 
        className='element'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <img
            className='element__image'
            src= {movie.image}
            alt={`Обложка фильма ${movie.nameRU}`}
          />
        <div className='element__wrapper'>
          <h2 className='element__movie-name'>{movie.nameRU}</h2>
          {moviePage && <button
              type='button'
              onClick = {handleLikeClick}
              className={movieLikeButtonClassName}
            ></button>}
          {savedMoviesPage && (
           <button
              type='button'
              className= {`element__deleteCard-btn ${isHovered &&'element__deleteCard-btn_active'}`}
            ></button>)}  
            
        </div>
        <div className='element__line'></div>
            <p className='element__duration'>{showDudation(movie.duration)}</p>
        
      </article>
    );
}

export default MoviesCard;