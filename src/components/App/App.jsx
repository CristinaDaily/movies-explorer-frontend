import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';

function App() {
  return (
  <div className="App">
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/saved-movies" elemetn={<SavedMovies />} />
    <Route path="/signin" element={< Login/>} />
    <Route path="/signup" element={< Register/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={< NotFound/>} />
   </Routes>
  </div>
  );
}

export default App;
