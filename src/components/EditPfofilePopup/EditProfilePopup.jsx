import React from 'react';
import './EditProfilePopup.css';


function EditProfilePopup(props) {
    return (
        <div className='popup'>
        <div className='profile'>
            <h2 className="profile__title">Добро пожаловать!</h2>
            <form className='profile__form' >
        <div className='popup__container'>       
        <label htmlFor='name-profile' className='profile__label'>
          Имя
        </label>        
        <input
        required
        id='name-profile'
          name='profile-name'
          type='text'
          placeholder='Имя'
          className='profile__input profile__input_type_name '
        ></input>   
        </div>   
        <div className='profile__dividing-line'></div>
        <div className='popup__container'>  
        <label htmlFor='email-profile' className='profile__label'>
          Email
        </label>  
        <input
          required
          id='email-profile'
          name='profile-email'
          type='email'
          placeholder='Email'
          className='profile__input profile__input_type_email'
        />
        </div> 
        <span className='profile__error'></span>
        <button type='submit' className='popup__button'>
        Сохранить
        </button>
            </form>
        </div>
        </div>
    )
}

export default EditProfilePopup;