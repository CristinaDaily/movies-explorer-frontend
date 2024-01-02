import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import movieApi from '../../utils/MoviesApi.js';
import { useLocalStorageState } from '../../utils/hooks.js';
import { INITIAL_NUMBER_OF_CARDS_1280, INITIAL_NUMBER_OF_CARDS_768, INITIAL_NUMBER_OF_CARDS_320, ADDITIONAL_CARDS_1280, ADDITIONAL_CARDS_768, ADDITIONAL_CARDS_320, SCREEN_WIDTH_LAPTOP, SCREEN_WIDTH_TABLET, SCREEN_WIDTH_MOBILE, SCREEN_WIDTH_LAPTOP_MIN,
} from '../../utils/constants.js'
import { filtereMoviesFromSearch, filterShortMovies } from '../../utils/filterMovies.js';


function Movies ({ loggedIn, onLike, onDelete, savedMovies,  showInputError, setShowInputError, searchPerformed, setSearchPerformed, error, setError, isLoading, setIsLoading }) {
 
  const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
  const [ allMovies, setAllMovies ] = useLocalStorageState('allMovies',[]); //all movies from server
  const [ movieData, setMovieData ] =useLocalStorageState('movieData',[]); // отфильтрованные фильмы показываемы на странице movies
  const [ filtredMovies, setFiltredMovies ]= useLocalStorageState('savedfiltredMovies',[]); 
  const [visibleCards, setVisibleCards] = useLocalStorageState('visibleCards',null); // number card to show based on the screen size
  const [searchQuery, setSearchQuery] = useLocalStorageState('searchQuery',''); // input fron the search on Movie page
  const [isChecked, setIsChecked] = useLocalStorageState('isChecked',false); //short movies checkbox
  const [cardsPerLoad, setCardsPerLoad]= useState(4);
  const [isNoResults, setIsNoResults] = useState(false); // ошибка, если ничего не найдено
  const [cardToShow, setCardToShow] = useLocalStorageState('cardToShow',[]);


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


  // movie search
  const getMovieData = async () => {
    setError(null);
      
    try {
      // Случай когда карточки уже есть в local storage
      if(allMovies.length !== 0) {
        const filteredMovies = await filtereMoviesFromSearch(allMovies, searchQuery);
        const filterResult = await filterShortMovies(filteredMovies, isChecked);
    
        if (filterResult.length === 0) {
          setIsNoResults(true); 
        } else {
          setIsNoResults(false);
        }
    
        setMovieData(filterResult);
        setFiltredMovies(filteredMovies); 
      } else {
        // Если это перврый поиск, то делаем запрос на получаени 100 фильмов
        const data = await movieApi.getMovieInfo();
        const mapAppMovies = mapMovies(data);
        const filteredMovies = await filtereMoviesFromSearch(mapAppMovies, searchQuery);
        const filterResult = await filterShortMovies(filteredMovies, isChecked);
        if (filterResult.length === 0) {
          setIsNoResults(true); 
        } else {
          setIsNoResults(false);
        }
  
        setMovieData(filterResult);
        setFiltredMovies(filteredMovies);
        setAllMovies(mapAppMovies);
        setSearchPerformed(true);
      }
    } catch (error) {
      console.error('Error during fetchMovieData:', error);
      setError(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
      );
    }finally {
      setIsLoading(false);
    }
  };
    
  //устанавливает значения для количества отображаемых карточек 
  useEffect(()=>{
    let cardsInitialToShow;
    let additionalCards;

    if (screenWidth >= SCREEN_WIDTH_LAPTOP_MIN) {
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_1280; 
      additionalCards = ADDITIONAL_CARDS_1280;
    }
     
    if (screenWidth > SCREEN_WIDTH_TABLET && screenWidth < SCREEN_WIDTH_LAPTOP_MIN) {
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_768;
      additionalCards = ADDITIONAL_CARDS_768;  
    }
    if (screenWidth <= SCREEN_WIDTH_TABLET && screenWidth > SCREEN_WIDTH_MOBILE) {
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_768;
      additionalCards = ADDITIONAL_CARDS_768; 
    }

    if(screenWidth <= SCREEN_WIDTH_MOBILE){
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_320;
      additionalCards = ADDITIONAL_CARDS_320;  
    }
      
    if (visibleCards > cardsInitialToShow) {
      setVisibleCards(visibleCards)}
    else {
      setVisibleCards(cardsInitialToShow) 
    }
      setCardsPerLoad(additionalCards); 

  },
  // eslint-disable-next-line 
  [screenWidth, getMovieData])


  const handleCardToShowUpdate = () => {
    const currentlyVisibleCards = movieData.slice(0, visibleCards);
      setCardToShow(currentlyVisibleCards);
  };
    
  useEffect(() => {
    handleCardToShowUpdate();
  }, 
  // eslint-disable-next-line 
  [visibleCards, movieData]);
        

  const mapMovies = (movies) => {
    return movies?.map((item)=>{
      return {
        movieId: item.id,
        country:item.country,
        director:item.director,
        description:item.description,
        year:item.year,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        duration: item.duration,
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailer: item.trailerLink,
        thumbnail:`https://api.nomoreparties.co${item.image.url}`,
      }
    })
  }

  const getMoreCards = ()=> {
    setVisibleCards(prevVisibleCards => prevVisibleCards + cardsPerLoad);
  }


  const handleSearchSubmit = (e)=> {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setShowInputError(true); 
      return;
    } else {
      setVisibleCards(0);
      setShowInputError(false);
      setIsLoading(true);
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
      if (searchPerformed && filterResult.length === 0) {
        setIsNoResults(true); 
      } else {
        setIsNoResults(false);
      }
        setMovieData(filterResult);
  },
  // eslint-disable-next-line 
  [isChecked, searchPerformed])

  const checkIfMovieIsSaved = (movie, savedMovies) => {
    return savedMovies.find(savedMovie => savedMovie.movieId === movie.movieId)
  }

  
  const cardToShowLikeStatus = (cardToShow.map(movie => 
  ({...movie, 
   liked: checkIfMovieIsSaved(movie, savedMovies)!== undefined
  })))


  return (
    <>
    < Header loggedIn={loggedIn} />
    <main className='content' >
      < SearchForm placeholder="Фильм" 
        value={searchQuery} 
        onChange={handleInputChange} 
        handleChange={handleChange}
        onSubmit={handleSearchSubmit}
        showInputError={showInputError}
        isChecked={isChecked}
      />
      < MoviesCardList 
        isLoading={isLoading} 
        isNoResults={isNoResults}
        error={error} 
        onLike={onLike}
        onDelete={onDelete} 
        moviesToShow={cardToShowLikeStatus}
      />
      <button className={`content__add-btn button ${movieData.length <= visibleCards ? 'content__add-btn_disabled' : ''}`} onClick={getMoreCards} >Ещё</button>
    </main>
    < Footer />
    </>
    );
}

export default Movies;