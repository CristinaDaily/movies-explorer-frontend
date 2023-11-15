import React from 'react';
import movie1 from '../../images/movie1.png';
import './MoviesCard.css';

function MoviesCard() {
    return (
        <article className='element'>
          <img
            className='element__image'
            src={movie1}
            alt='Обложка фильма'
          />
    
        <div className='element__wrapper'>
          <h2 className='element__movie-name'>33 слова о дизайне</h2>
            <button
              type='button'
              className='element__like-btn'
            ></button>
            </div>
            <p className='element__duration'>1ч42м</p>
        
      </article>
    );
}

export default MoviesCard;