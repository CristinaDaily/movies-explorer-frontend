import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'; 
import './MoviesCardList.css'

function MoviesCardList() {
    return (
        <section className='movies'>
            <MoviesCard />

        </section>
    );
}

export default MoviesCardList;