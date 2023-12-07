import React from 'react';
import { Link} from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg'

function Register() {
    return (
        <main className='register'>
          <Link to="/" className="register__logo logo">
          <img src={logo} alt="Лого" />
          </Link>
            
            <h2 className="register__title">Добро пожаловать!</h2>
        <form className='register__form' >
        <label htmlFor='name-register' className='register__label'>
          Имя
        </label>        
        <input
        requited
        id='name-register'
          name='register-name'
          type='text'
          placeholder='Имя'
          className='register__input register__input_type_name'
        ></input>  
        <span className='register__error'></span>    
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
        <button type='submit' className='register__button'>
          Зарегистрироваться
        </button>
      </form>
      <div className='register__signin'>
        <p className='register__question'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__link link'>
          Войти
        </Link>
      </div>
        </main>
    );
}

export default Register;