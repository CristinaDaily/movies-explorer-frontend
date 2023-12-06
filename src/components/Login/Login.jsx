import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Login.css';


function Login() {
    return (
      <div className='login'>
        <Link to="/" className="register__logo logo">
          <img src={logo} alt="Лого" />
          </Link>
      <h2 className="register__title">Рады видеть!</h2>
  <form className='register__form' > 
  <label htmlFor='email-register' className='register__label'>
    Email
  </label>  
  <input
    required
    id='email-register'
    name='register-email'
    type='email'
    placeholder='Email'
    className='register__input register__input_type_email'
  />
  <span className='register__error'></span>
  <label htmlFor='password-register' className='register__label'>
    Пароль
  </label>
  <input
    required
    id='password-register'
    name='register-password'
    type='password'
    placeholder='Пароль'
    className='register__input register__input_type_password'
  />
  <span className='register__error'></span>
  <button type='submit' className='login__button'>
  Войти
  </button>
</form>
<div className='register__signin'>
  <p className='register__question'>Ещё не зарегистрированы?</p>
  <Link to='/signup' className='register__link link'>
  Регистрация
  </Link>
</div>
  </div>
    );
}

export default Login;