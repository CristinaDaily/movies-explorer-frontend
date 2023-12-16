import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import movieApi from '../../utils/MoviesApi.js';
import {useLocalStorageState} from '../../utils/hooks.js';
import { INITIAL_NUMBER_OF_CARDS_1280, INITIAL_NUMBER_OF_CARDS_768, INITIAL_NUMBER_OF_CARDS_320, ADDITIONAL_CARDS_1280, ADDITIONAL_CARDS_768, ADDITIONAL_CARDS_320, SCREEN_WIDTH_LAPTOP, SCREEN_WIDTH_TABLET, SHORT_MOVIES
} from '../../utils/constants.js'


function Movies({loggedIn}) {
    // movie
    const [allMovies,setAllMovies] = useLocalStorageState('allMovies',[]); //all movies from server
    const [movieData, setMovieData] =useLocalStorageState('movieData',[]); // filteredmovies that is showen on the page
    const [filtredMovies, setFiltredMovies]= useLocalStorageState('savedfiltredMovies',[]); 
    const [visibleCards, setVisibleCards] = useLocalStorageState('visibleCards',16); // number card to show based on the screen
    const [searchQuery, setSearchQuery] = useLocalStorageState('searchQuery',''); // input fron the search
    const [isChecked, setIsChecked] = useLocalStorageState('isChecked',false); //short movies checkbox
    const [cardsPerLoad, setCardsPerLoad]= useState(4);
    

    const [showInputError, setShowInputError] = useState(false); // нужно придумать как использовать
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   

    const [isLoading, setIsLoading] = useState(false); // preloader state
    const [isNoResults, setIsNoResults] = useState(false); // error element is nothisn has found 
    const [error, setError]= useState(null); // ошибка в процессе получения и обработки данных
    
   
    

    // отслеживает изменения размера окна
    useEffect(() => {
      const handleResize = () => {
        setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 200); 
    };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      
    }, []);
    
    //устанавливает значения для количества отображаемых карточек 
    useEffect(()=>{
    
      let cardsInitialToShow;
      let additionalCards;

      if(screenWidth >= SCREEN_WIDTH_LAPTOP){
        cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_1280;
        additionalCards = ADDITIONAL_CARDS_1280;
      }

      if(screenWidth > SCREEN_WIDTH_TABLET && screenWidth < SCREEN_WIDTH_LAPTOP){
        cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_768;
        additionalCards = ADDITIONAL_CARDS_768;
      }
      if(screenWidth<= SCREEN_WIDTH_TABLET){
        cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_320;
        additionalCards = ADDITIONAL_CARDS_320;
      }
      setVisibleCards(cardsInitialToShow) // TODO: This overwrites the visibleCards local storage variable when the page is reloaded
      setCardsPerLoad(additionalCards);

      },[screenWidth])

      
        

     
    


    const mapMovies = (movies) => {
      return movies?.map((item)=>{
        /*
        const hours = Math.floor(item.duration / 60);
        const minutes = item.duration % 60;
        const duration = hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;*/

        return {
        id: item.id,
        country:item.country,
        director:item.director,
        description:item.description,
        year:item.year,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        duration: item.duration,
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailer: item.trailerLink,
        thumbnail:item.thumbnail,
        }

    })
    }


   const filtereMoviesFromSearch = (movies, searchQuery) => {
      return movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }

   const filterShortMovies = (movies, shortFilmChecked) => {

    if (shortFilmChecked) {
        return movies.filter((movie) => movie.duration
        <= SHORT_MOVIES);
      }
      return movies;
    };

  


    const getMovieData = async() => {

      

      // Первый запрос к API
      setIsLoading(true);
      setError(null);
      try {
        const data = await movieApi.getMovieInfo();
        const mapAppMovies = mapMovies(data);
          
        const filteredMovies = await filtereMoviesFromSearch( mapAppMovies, searchQuery)
          console.log('filteredMovies', filteredMovies);
          
          const filterResult = await filterShortMovies(filteredMovies,isChecked);
          console.log('filteredShortMovies', filterResult) 
          
          if (filterResult.length === 0) {
            setIsNoResults(true); // если результаты поиска отсутствуют
          } else {
            setIsNoResults(false);
          }
  
          setMovieData(filterResult);
          setFiltredMovies(filteredMovies);
          setAllMovies(mapAppMovies);
          
      
      } catch(error) {
            console.error('Error during fetchMovieData:', error);
            setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
          
          }finally {
            setIsLoading(false);
          
        }}

        const getMoreCards = ()=> {
          const newVisibleCards = visibleCards + cardsPerLoad;
          setVisibleCards(newVisibleCards);

        }


    const handleSearchSubmit =  (e)=> {
      e.preventDefault();

      if (!searchQuery.trim()) {
        console.log("Setting showInputError to true", showInputError);
        setShowInputError(true);
        return; 
      } else {
        setShowInputError(false);
        getMovieData();
      }
    }

    const handleInputChange = (e)=>{
      setSearchQuery(e.target.value)
    }

    const handleChange = (e) => {
      setIsChecked (e.target.checked);
  }
  
  useEffect(()=>{
        const filterResult = filterShortMovies(filtredMovies,isChecked);
        console.log('выполняю поиск по фильмам',filtredMovies,isChecked)
        if (filterResult.length === 0) {
          console.log('filterResult')
          setIsNoResults(true); // если результаты поиска отсутствуют
        } else {
          setIsNoResults(false);
        }
        setMovieData(filterResult);
        

  },[isChecked])
    

    

    return (
        <>
        <Header loggedIn={loggedIn} />
        <main className='content' >
            <SearchForm placeholder="Фильм" 
            value={searchQuery} 
            onChange={handleInputChange} 
            handleChange={handleChange}
            onSubmit={handleSearchSubmit}
            showInputError={showInputError}
            isChecked={isChecked}
            />
            
            <MoviesCardList movieData={movieData} isLoading={isLoading} isNoResults={isNoResults} error={error} visibleCards={visibleCards}/>
            <button className={`content__add-btn button ${movieData.length <= visibleCards ? 'content__add-btn_disabled' : ''}`} onClick={getMoreCards} >Ещё</button>
        </main>
        < Footer />
        </>
    );
}

export default Movies;