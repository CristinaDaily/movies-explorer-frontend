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
import * as api from '../../utils/MainApi'
import * as token from '../../utils/token'


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const {loginError, setLoginError} = useState('');
  

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname
  


  const auth = (id) => {
    api.getCurrentUser()
          .then((res) => {
            console.log('useEffect get currentUser', res);
            if (res) {
              setCurrentUser({ email: res.email, _id: res._id, name:res.name });
              setLoggedIn(true);
              navigate(pathname, {replace: true})
            }
          })
          .catch((err) => {
            console.error('Error during token validation:', err);
            token.removeToken();
            
          });
  }

  useEffect(()=>{
      const id = token.getToken();
      console.log(id)
      if (id) {
        auth(id)
        
      }
    },[])



  function handleLogin ({email, password}){
    return api
    .login(email, password)
    .then((user)=>{
      if (user) {
        token.setToken(user._id)
        setCurrentUser(user)
        setLoggedIn(true)
        navigate('/movies', { replace: true })
      }
    })
    .catch((err)=>{
      setLoggedIn(false);
      throw err;
    });
  }
  
  function handleRegister({name, email, password}){
    return api
    .register(name, email, password)
    .then((user)=>{
      setCurrentUser(user);
      //autorisation and redirect to movies
      handleLogin({ email, password });
    })
  }

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

 

  return (
  <CurrentUserContext.Provider value={currentUser}>
   <div className="app">
    <Routes>
     <Route path="/" element={<Main loggedIn={loggedIn}/>} />
     <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />} />
     <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />} />
     <Route path="/signin" element={< Login onLogin={handleLogin} loginError={setLoginError}/>} />
     <Route path="/signup" element={< Register onRegister={handleRegister}  />} />
     <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn} onSignout ={handleSignout} />} />
     <Route path="*" element={< NotFound />} />
   </Routes>
   </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
