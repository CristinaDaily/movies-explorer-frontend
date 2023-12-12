import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import movieApi from '../../utils/MoviesApi.js';

function Movies() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movieData, setMovieData] =useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    

    const mapMovies = (movies) => {
      return movies?.map((item)=>{

        const hours = Math.floor(item.duration / 60);
        const minutes = item.duration % 60;
        const duration = hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;

        return {
        id: item.id,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        duration: duration,
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailer: item.trailerLink,
        }

    })
    }

   const filtereMoviesFromSearch = (movies, searchQuery) => {
      return movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }
    

    const getMovieData = () => {
      setIsLoading(true);
      movieApi
        .getMovieInfo()
        .then((data) => {
          const newMovies = mapMovies(data);
          const filteredMovies = filtereMoviesFromSearch(newMovies, searchQuery)
          setMovieData(filteredMovies);
          
        })
          .catch((error) => {
            console.error('Error during fetchMovieData:', error);
          
          }).finally(() =>{
            setIsLoading(false);
          })
        }

    
    /*React.useEffect(() => {
      
     
        getMovieData();
      
      
  
    }, [searchQuery]); */

    const handleSearchSubmit =(e)=> {
      e.preventDefault();
      getMovieData();
    }

    return (
        <>
        <Header />
        <main className='content' >
            <SearchForm placeholder="Фильм" 
            value={searchQuery} 
            onChange={(e)=>{setSearchQuery(e.target.value)}} 
            onSubmit={handleSearchSubmit}/>
            
            <MoviesCardList movieData={movieData} isLoading={isLoading} />
            <button className='content__add-btn button'>Ещё</button>
        </main>
        < Footer />
        </>
    );
}

export default Movies;