import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMovies from '../../savedMovies';

function SavedMovies() {
    return (
        <>
        <Header />
        <SearchForm placeholder="Фильм"/>
        <MoviesCardList  movieData={savedMovies}/>
        <Footer />
        </>
    );
}

export default SavedMovies;