import React , { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/formValidation';
import logo from '../../images/logo.svg'
import './Login.css';



function Login({onLogin}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const {loginError, setLoginError} = useState('');
  
  const {email, password} = values;

  useEffect(()=>{
    resetForm();
  },[resetForm])

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({email, password}).catch((err) => {
      console.log(err)
      console.log(err.statuseco)
        console.log(`Login error: ${err}`);
        if (err.response && err.response.status === 401) {
          setLoginError('Неправильное имя пользователя или пароль')
        } else{
          setLoginError(err.message)
        }
        
    })
  }



    return (
      <main className='login'>
        <Link to="/" className="register__logo logo">
          <img src={logo} alt="Лого" />
          </Link>
      <h2 className="register__title">Рады видеть!</h2>
        <form className='register__form' onSubmit={handleSubmit}> 
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
          <span className='register__error' id='email-register-error'>{errors.email || ''}</span>
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
            {errors.password}</span>
          <p className='loggin__error'>{loginError}</p>
          <button type='submit'  className={`login__button button ${!isValid && 'login__button_disabled'}`} disabled={!isValid}>
          Войти
          </button>
       </form>
        <div className='register__signin'>
          <p className='register__question'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='register__link link'>
          Регистрация
          </Link>
        </div>
  </main>
    );
}

export default Login;