import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/formValidation';


function Register({ onRegister, loggedIn }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const { name, email, password } = values;
  const [ registretionMessage, setRegistretionMessage ] = React.useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    resetForm();
  },[resetForm])

  
  function handleSubmit(e) {
    e.preventDefault();
    setRegistretionMessage('');
    setIsLoading(true);

    onRegister({name, email, password}).catch((err) => {
      console.log(`Registration error:${err} `);
      if(err === 'Error: 409' ){
        setRegistretionMessage('Пользователь с таким email уже существует')
      }
      if (err === 'Error: 400' ){
        setRegistretionMessage('Переданы некорректные данные')
      } 
      if (err === 'Error: 500' ){
        setRegistretionMessage('Ошибка сервера')
      }
   })
   .finally(() => {
    setIsLoading(false);
   })
  }

  useEffect(() => {
    if(loggedIn){
      navigate ('/movies')
    }
    })
    


    return (
        <main className='register'>
          <Link to="/" className="register__logo logo">
          <img src={logo} alt="Лого" />
          </Link>
            
        <h2 className="register__title">Welcome!</h2>
        <form className='register__form' onSubmit={handleSubmit}>
          <label htmlFor='name-register' className='register__label'>
            Name
          </label>        
          <input
           required
           id='name-register'
           name='name'
           type='text'
           placeholder='Name'
           minLength= '2'
           maxLength= '30'
           pattern = '^[A-Za-zА-Яа-я \-]+$'
           value={values.name || ''}
           onChange={handleChange}
           className='register__input register__input_type_name'
           disabled={isLoading}
           /> 
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
           disabled={isLoading}
          />
          <span className='register__error' id='email-register-error'>
            {errors.email || ''}
            </span>
          <label htmlFor='password-register' className='register__label'>
           Password
          </label>
          <input
           required
           id='password-register'
           name='password'
           type='password'
           placeholder='Password'
           value = {values.password || ''}
           onChange={handleChange}
           className='register__input register__input_type_password'
           disabled={isLoading}
          />
          <span className='register__error' id='password-register-error'>
            {errors.password}
          </span>
          <p className='regiater__error_type_final'>{registretionMessage}</p>
          <button type='submit' className={`register__button button ${!isValid && 'register__button_disabled'}`} disabled={!isValid || isLoading}>
          {isLoading ? 'Creating account' : 'Register' }
          </button>
       </form>
      <div className='register__signin'>
        <p className='register__question'>Do you alredy have an accunt?</p>
        <Link to='/signin' className='register__link link'>
          Sign In
        </Link>
      </div>
        </main>
    );
}

export default Register;