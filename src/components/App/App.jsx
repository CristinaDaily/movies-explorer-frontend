import React,  { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import * as api from '../../utils/MainApi';
import * as token from '../../utils/token';




function App() {
  
  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [ savedMovies, setSavedMovies ] = useState([]); // сохраненный фильмы

  const [ showInputError, setShowInputError ] = useState(false); // ошибка пустого поля поиска
  const [ searchPerformed, setSearchPerformed ] = useState(false);
  const [ error, setError ]= useState(null); // ошибка в процессе получения и обработки данных 
  const [ isLoading, setIsLoading ] = useState(false); 
  const [ isInfoPopupOpen, setisInfoPopupOpen ] = useState(false); // попап с информацией об успешном редактировании профайла
  
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname

 // Registration and Authorization

  const auth = (id) => {
    api.getCurrentUser()
      .then((res) => {
        if (res) {
          setCurrentUser({ email: res.email, _id: res._id, name:res.name });
          setLoggedIn(true);
          navigate(pathname, {replace: true});
        }
      })
      .catch((err) => {
        console.error('Error during token validation:', err);
        token.removeToken();   
      });
  }

  function handleLogin ({email, password}){
    return api
    .login(email, password)
    .then((user)=>{
      if (user) {
        token.setToken(user._id)
        setLoggedIn(true)
        navigate('/movies', { replace: true })
      }
    })
    .catch((err)=>{
      setLoggedIn(false);
      throw err; 
      
    })
  }

  function handleRegister({name, email, password}){
    return api
    .register(name, email, password)
    .then((user)=>{
      setCurrentUser(user); 
      handleLogin({ email, password })
    }
  )}

  function handleSignout (){
      api.signout()
      .then((res)=>{
        console.log(res)
        setLoggedIn(false);
        navigate('/', { replace: true })
        setCurrentUser({ name: "", email: ""})
        localStorage.clear()
      })
      .catch((err)=>{
        console.error(`Error: ${err.message}`)
      })
    }

  useEffect(()=>{
    const id = token.getToken();
      if (id) {
        auth(id)
      } else {
        navigate('/', { replace: true })
        localStorage.clear()
      }
  },[])

 
  useEffect(()=>{
    if(loggedIn) {
        api.getCurrentUser()
          .then((user)=>{
            console.log(user, 'получаю данные если loggedIn')
            setCurrentUser(user)
          // нужно получать также сохраненные карточки
        }).catch((err)=>{
          console.log(err)
        })

        api.getSavedMovies()
        .then((savedMovies)=>{
          setSavedMovies(savedMovies);
        })
        .catch(err => console.log(err))
      }
  }, [loggedIn])

  // Actions with movies and profile: save, delete, like, profile edit

  const handleMovieSave = (movie) =>{
    api.saveMovie(movie)
      .then((savedMovie)=>{
        setSavedMovies([...savedMovies, savedMovie]);
        
      }).catch((err)=>{
        console.log(err)
      })
  }

  const handleMovieDelete = (movieToDelete) => {
    const foundMovie = savedMovies.find((movie) => { 
      return movie.movieId === movieToDelete.movieId
    })
      
    api.deleteSavedMovie(foundMovie._id)
      .then((res) => {
        setSavedMovies(savedMovies.filter((movie) => movie.movieId !== movieToDelete.movieId));
        movieToDelete.liked = false;
      }).catch((err) => {
        console.log(err)
      })
  } 

  function handlePopupOpen() {
    setisInfoPopupOpen(true);
  }

  function closePopup() {
    setisInfoPopupOpen(false);
  }

  function handleEditProfile({ name, email }){
    api.editProfile(name, email)
      .then((updatedUser) => {
        setCurrentUser(updatedUser)
        handlePopupOpen();
      }).catch((err) => {
        console.log(`Ошибка редактировани профайла:${err}`)
      })
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
   <div className="app">
    <Routes>
     <Route path="/" element={<Main loggedIn={loggedIn}/>} />
     <Route path="/movies"
      element={<ProtectedRoute element={Movies} 
        loggedIn={loggedIn}
        onLike ={handleMovieSave} 
        onDelete={handleMovieDelete}  
        savedMovies={savedMovies} 
        showInputError={showInputError}  
        setShowInputError={setShowInputError}
        searchPerformed={searchPerformed} 
        setSearchPerformed={setSearchPerformed} 
        error={error} 
        setError={setError}
        isLoading={isLoading} 
        setIsLoading={setIsLoading} />} />
     <Route path="/saved-movies" 
      element={<ProtectedRoute element={SavedMovies} 
        loggedIn={loggedIn}
        showInputError={showInputError}
        setShowInputError={setShowInputError}
        savedMovies={savedMovies} 
        onDelete={handleMovieDelete}
        error={error}
        setError={setError} 
        isLoading={isLoading}
        setIsLoading={setIsLoading} />} />
     <Route path="/signin" element={< Login onLogin={handleLogin} />} />
     <Route path="/signup" element={< Register onRegister={handleRegister}  />} />
     <Route path="/profile" 
      element={<ProtectedRoute element={Profile}
        loggedIn={loggedIn} 
        onSignout ={handleSignout}
        onEditProfile={handleEditProfile} 
        isPopupOpen ={isInfoPopupOpen}
        onClosePopup={closePopup}/>} />
     <Route path="*" element={< NotFound />} />
   </Routes>
   </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
