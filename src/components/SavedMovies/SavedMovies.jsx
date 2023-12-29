import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filtereMoviesFromSearch, filterShortMovies } from '../../utils/filterMovies.js';


function SavedMovies({ loggedIn, savedMovies, onDelete, isLoading, setIsLoading , showInputError, setShowInputError, error, setError }) {
  
  const [ searchQuerySavedMov, setSearchQuerySavedMov] = useState('');//serch in saved-movie page
  const [ savedMovieData, setSavedMovieData ]= useState([]) 
  const [ isCheckedSaved, setIsCheckedSaved ] = useState(false); //short movies checkbox
  const [ filteredSavedMovies, setFilteredSavedMovies ] = useState([]);
  const [ isNoResultsShortMovies, setIsNoResultsShortMovies ] = useState(false);

  function handleInputChange (e){
    setSearchQuerySavedMov(e.target.value)
  }
  
  const handleChange = (e) => {
    setIsCheckedSaved (e.target.checked);
  }
 
  const filterSavedMovies = async () => { 
    setError(null);
     try {
      if (savedMovies.length !== 0) {
        const filteredSavedMovies = await filtereMoviesFromSearch(savedMovies, searchQuerySavedMov);
        const filterSavedResult = await filterShortMovies(filteredSavedMovies, isCheckedSaved);
    
        if (filterSavedResult.length === 0) {
          setIsNoResultsShortMovies(true);
        } else {
          setIsNoResultsShortMovies(false);
        }
    
        setSavedMovieData(filterSavedResult);
        setFilteredSavedMovies(filteredSavedMovies);
      }} catch(err) {
        setError (
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        );
      } finally {
        setIsLoading(false);
      }
  } 
    
  function handleSearchSubmit (e){
    e.preventDefault()

    if (!searchQuerySavedMov.trim()) {
      setShowInputError(true);
      return; 
    } else {
      setIsLoading(true);
      setShowInputError(false);
      filterSavedMovies()
    }
  }

  useEffect(()=>{
    const filteredShortMovies =  filterShortMovies(filteredSavedMovies, isCheckedSaved)
    setSavedMovieData(filteredShortMovies)
  },[ isCheckedSaved ]) 


  useEffect(() => {
    if(savedMovieData.length === 0){
      setIsNoResultsShortMovies(true)
    } else {
      setIsNoResultsShortMovies(false);
    }
  }, [ savedMovieData ])

  useEffect(()=>{
    setSavedMovieData(savedMovies);
    setFilteredSavedMovies(savedMovies);  
 },[ savedMovies ])


  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm placeholder="Фильм"
          value={searchQuerySavedMov} 
          onChange={handleInputChange} 
          onSubmit={handleSearchSubmit}
          handleChange={handleChange}
          isChecked={isCheckedSaved}
          showInputError={showInputError}
        />
        <MoviesCardList 
          moviesToShow={savedMovieData} 
          onDelete={onDelete} 
          isLoading={isLoading}
          isNoResults={isNoResultsShortMovies} 
          error={error}/>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;