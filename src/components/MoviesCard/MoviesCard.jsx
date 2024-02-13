import React,  { useState} from 'react';
import { useLocation} from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onLike, onDelete }) {
  
  const [ isLiked, setIsLiked ] = useState(movie.liked);
  const location = useLocation();
  const moviePage = location.pathname === '/movies';
  const savedMoviesPage =location.pathname ==='/saved-movies';

  const handleLikeClick = () => {
    if(isLiked){
      onDelete(movie)
      setIsLiked(false)
    } else {
      onLike(movie)
      setIsLiked(true) 
    }
  }

  const hadleDeleteClick = () =>{
    onDelete(movie);
  }

  const showDudation =(duration) =>{
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const durationToShow = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    return durationToShow; 
  }

  const movieLikeButtonClassName = `element__like-btn ${
    isLiked && 'element__like-btn_active'
  }`;

  const handleCardClick = ()=> {
    window.open(movie.trailer, '_blank');
  }


  return (
    <article 
      className='element'
      
    >
      <img
        className='element__image'
        onClick={handleCardClick}
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
            onClick={hadleDeleteClick}
            className= 'element__deleteCard-btn element__deleteCard-btn_active'
          ></button>)}      
      </div>
      <div className='element__line'></div>
        <p className='element__duration'>{showDudation(movie.duration)}</p>
    </article>
  );
}

export default MoviesCard;