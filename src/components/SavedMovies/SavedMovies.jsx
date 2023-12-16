import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMovies from '../../savedMovies';

function SavedMovies({loggedIn}) {
    return (
        <>
        <Header loggedIn={loggedIn} />
        <main>
        <SearchForm placeholder="Фильм"/>
        <MoviesCardList  movieData={savedMovies}/>
        </main>
        <Footer />
        </>
    );
}

export default SavedMovies;