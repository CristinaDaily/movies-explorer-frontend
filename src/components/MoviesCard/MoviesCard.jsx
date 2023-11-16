import React from 'react';
import movie1 from '../../images/movie1.png';
import './MoviesCard.css';


function MoviesCard({name, duration}) {
    return (
        <article className='element'>
          <img
            className='element__image'
            src={movie1}
            alt='Обложка фильма'
          />
        <div className='element__wrapper'>
          <h2 className='element__movie-name'>{name}</h2>
            <button
              type='button'
              className='element__like-btn element__like-btn_active'
            ></button>
        </div>
        <div className='element__line'></div>
            <p className='element__duration'>{duration}</p>
        
      </article>
    );
}

export default MoviesCard;