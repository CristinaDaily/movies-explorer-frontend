import React,  { useState} from 'react';
import { useLocation} from 'react-router-dom';

import './MoviesCard.css';



function MoviesCard({image, nameRU, duration}) {
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
            src= {image}
            alt={`Обложка фильма ${nameRU}`}
          />
        <div className='element__wrapper'>
          <h2 className='element__movie-name'>{nameRU}</h2>
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