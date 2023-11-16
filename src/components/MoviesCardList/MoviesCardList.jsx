import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'; 
import './MoviesCardList.css';
import movies from '../../movies'

function MoviesCardList() {
    return (
        <section className='movies'>
            <div className='movies__container'>
            {movies.map((movie)=>(
                <MoviesCard  name={movie.nameRU} duration={movie.duration} key={movie.id}/>
            ))}  
            </div>
        </section>
    );
}

export default MoviesCardList;