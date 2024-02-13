import React , { useState, useEffect }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/formValidation';
import logo from '../../images/logo.svg'
import './Login.css';

function Login({ onLogin, loggedIn }) {
  
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [ loginError, setLoginError ] = useState('');
  const { email, password } = values;
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();


  useEffect(() => {
    resetForm();
  },[ resetForm ])

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    onLogin({ email, password }).catch((err) => {
      if(err === 'Error: 401') {
        setLoginError('Неправильное имя пользователя или пароль')
      } else {
        setLoginError(err)
      }     
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }

  useEffect(() => {
  if(loggedIn){
    navigate ('/movies')
  }
  })
  
  
  return (
    <main className='login'>
      <Link to="/" className="register__logo logo">
        <img src={logo} alt="Лого" />
      </Link>
      <h2 className="register__title">Welcome back!</h2>
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
          disabled={isLoading}
        />
        <span className='register__error' id='email-register-error'>{errors.email || ''}</span>
        <label htmlFor='password-register' className='register__label'>
          Password
        </label>
        <input
          required
          id='password-register'
          name='password'
          type='password'
          placeholder='password'
          value = {values.password || ''}
          onChange={handleChange}
          className='register__input register__input_type_password'
          disabled={isLoading}
        />
        <span className='register__error' id='password-register-error'>
          {errors.password}</span>
        <p className='loggin__error'>{loginError}</p>
        <button type='submit'  className={`login__button button ${!isValid && 'login__button_disabled'}`} disabled={!isValid || isLoading}>
        {isLoading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='register__signin'>
        <p className='register__question'>Dont have an account?</p>
        <Link to='/signup' className='register__link link'>
          Sign Up
        </Link>
      </div>
    </main>
  );
}

export default Login;