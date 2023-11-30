import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './movies.css';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

function Movies() {
    return (
        <>
        <Header />
        <main className='content' >
            <SearchForm placeholder="Фильм" />
            <MoviesCardList />
            <button className='content__add-btn botton'>Ещё</button>
        </main>
        < Footer />
        </>
    );
}

export default Movies;