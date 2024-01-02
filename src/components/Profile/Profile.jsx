import React, { useContext, useState } from 'react';
import { useFormWithValidation } from '../../utils/formValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css'
import Header from '../Header/Header';
import success from '../../images/success.svg';

function Profile({ onSignout, loggedIn, onEditProfile, isPopupOpen, onClosePopup }) {
  
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [ isInputsChanged, setIsInputsChanged ] = React.useState(false);
  const currentUser = useContext(CurrentUserContext);
  const{ name, email } = values;

  console.log(registrationErr)

  React.useEffect(() => {
    resetForm(currentUser);
  }, // eslint-disable-next-line 
  []);


  React.useEffect(() => {
    checkInputs();
  },// eslint-disable-next-line 
  [values]);

  function checkInputs() {
    const { name, email } = currentUser;
    if (!values.name && !values.email) return;
    if (name === values.name && email === values.email) {
      setIsInputsChanged(false);
    } else {
      setIsInputsChanged(true); 
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onEditProfile({name, email})
  }


    return (
      <>
      <Header loggedIn={loggedIn}/>
      <main >
        <section className='profile'>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className='profile__form' onSubmit={handleSubmit}>
          <div className='popup__container'>       
            <label htmlFor='name-profile' className='profile__label'>
            Имя
            </label>        
            <input
              required
              id='name-profile'
              name='name'
              type='text'
              value={values.name || ''}
              onChange={handleChange}
              placeholder='Введите имя'
              minLength= '2'
              maxLength= '30'
              pattern = '^[A-Za-zА-Яа-я \-]+$'
              className='profile__input profile__input_type_name '
            ></input> 
          </div>
        <span className='register__error' id='name-profile-error'>{errors.name || ''}</span>     
        <div className='profile__dividing-line'></div>
        <div className='popup__container'>  
          <label htmlFor='email-profile' className='profile__label'>
            Email
          </label>  
          <input
            required
            id='email-profile'
            name='email'
            type='email'
            value={values.email || ''}
            placeholder="Введите email"
            className='profile__input profile__input_type_email'
            onChange={handleChange}
            pattern='^[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$'
          />
        </div>
        <span className='register__error' id='name-profile-error'>{errors.email || ''}</span> 
        <span className='profile__error'></span>
        <button className={`profile__edit-btn ${(!isValid || !isInputsChanged)? 'profile__edit-btn_type_disabled':''}`} type='submit' disabled={!isInputsChanged || !isValid}>Редактировать</button>
        </form>
        <button className="profile__exit " onClick={onSignout}>Выйти из аккаунта</button>
        
        </section>
      </main>
        <div className={`banner  ${isPopupOpen ? 'banner__open' : ''}`}>
          <div className='banner__container'>
          <button
            type='button'
            aria-label='закрыть'
            className='popupInfo__close'
            onClick={onClosePopup}
          ></button>
          <div className='popupInfo__container_type_info'>
            <img
              src={success}
              alt='Лого'
              className='popupInfo__icon'
            ></img>
          <h2 className='popupInfo__message'>
            Данные успешно сохранены!
          </h2>
        </div>
      </div>
    </div>
        </>
    );
}

export default Profile;