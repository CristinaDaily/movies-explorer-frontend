import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { isApiError } from '../../utils/MainApi';
import './Register.css';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/formValidation';


function Register({onRegister}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const {name, email, password} = values;
  const [registretionMessage, setRegistretionMessage] = React.useState('');

  useEffect(()=>{
    resetForm();
  },[resetForm])

  
  function handleSubmit(e) {
    e.preventDefault();
    setRegistretionMessage('');
    onRegister({name, email, password}).catch((apiError) => {
      let errorMessage = "Неизвестная ошибка";
      if (isApiError(apiError)) {
        switch (apiError.status) {
          case 400: errorMessage = "Переданы некорректные данные"; break;
          case 409: errorMessage = "Пользователь с таким E-mail уже существует"; break;
          case 500: errorMessage = "Ошибка сервера"; break;
          default:  errorMessage = apiError.payload.setRegistretionMessage;
        }
      } else {
        console.error(apiError);
      }
      setRegistretionMessage(errorMessage);
   });
  }

    return (
        <main className='register'>
          <Link to="/" className="register__logo logo">
          <img src={logo} alt="Лого" />
          </Link>
            
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className='register__form' onSubmit={handleSubmit}>
          <label htmlFor='name-register' className='register__label'>
            Имя
          </label>        
          <input
           required
           id='name-register'
           name='name'
           type='text'
           placeholder='Имя'
           minLength= '2'
           maxLength= '30'
           pattern = '^[A-Za-zА-Яа-я \-]+$'
           value={values.name || ''}
           onChange={handleChange}
           className='register__input register__input_type_name'>
          </input>  
          <span className='register__error' id='name-register-error'>{errors.name || ''}</span>    
          <label htmlFor='email-register' className='register__label'>
           Email
          </label>  
          <input
           required
           id='email-register'
           name='email'
           type='email'
           placeholder='Email'
           pattern='^[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$'
           value={values.email || ''}
           onChange={handleChange}
           className='register__input register__input_type_email'
          />
          <span className='register__error' id='email-register-error'>
            {errors.email || ''}
            </span>
          <label htmlFor='password-register' className='register__label'>
           Пароль
          </label>
          <input
           required
           id='password-register'
           name='password'
           type='password'
           placeholder='Пароль'
           
           value = {values.password || ''}
           onChange={handleChange}
           className='register__input register__input_type_password'
           
          />
          <span className='register__error' id='password-register-error'>
            {errors.password}
          </span>
          <p className='regiater__error_type_final'>{registretionMessage}</p>
          <button type='submit' className={`register__button button ${!isValid && 'register__button_disabled'}`} disabled={!isValid}>
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