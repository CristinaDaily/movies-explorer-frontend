/*import React, {useEffect, useState} from 'react';
import { useFormWithValidation } from '../../utils/formValidation';
import './EditProfilePopup.css';


function EditProfilePopup({isOpen, handlePopupClose, currentUser}) {
  
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [isInputs, setIsInputs] = useState(false);

  const {name, email} = values;

  useEffect(()=>{
    resetForm({
      name: currentUser.name || '',
      email: currentUser.email || '',
    });
  },[resetForm, currentUser])

  useEffect(()=>{
    checkInputs();
  },[values,currentUser])

  function checkInputs() {
    const { name, email } = currentUser;
        if (!values.name && !values.email) return;
        if (name === values.name && email === values.email) {
            setIsInputs(true);
        } else {
            setIsInputs(false);
        }

  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }

    return (
        <div className={`${isOpen ? 'popup__opened' : 'popup' }`}>
        <div className='profile'>
            <h2 className="profile__title">Добро пожаловать!</h2>
            <form className='profile__form' nSubmit={handleSubmit}>
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
        <button type='submit' className={`popup__button ${(!isValid && !isInputs) &&'popup__button_disabled'}` } disabled={!isValid || !isInputs} >
        Сохранить
        </button>
            </form>
        <button type='button' className='poppup__back' onClick={handlePopupClose}>
        Назад
        </button>
        </div>
        </div>
    )
}

export default EditProfilePopup; 
*/