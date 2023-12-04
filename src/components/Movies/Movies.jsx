import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import movies from '../../movies';

function Movies() {
    return (
        <>
        <Header />
        <main className='content' >
            <SearchForm placeholder="Фильм" />
            <MoviesCardList movieData ={movies}/>
            <button className='content__add-btn botton'>Ещё</button>
        </main>
        < Footer />
        </>
    );
}

export default Movies;