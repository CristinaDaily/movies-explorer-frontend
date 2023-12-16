import React, { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css'
import EditProfilePopup from '../EditPfofilePopup/EditProfilePopup';
import Header from '../Header/Header';

function Profile({onSignout, loggedIn}) {
  const [editProfileOpen, setEditProfileOpen] = useState(false)
  const currentUser = useContext(CurrentUserContext);

  function handleOpenProfileEdit(){

  }

    return (
      <>
      <Header loggedIn={loggedIn}/>
      <main>
        <section className='profile'>
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <div className='profile__container' >
        <div className='profile__wrapper'>  
        <div className='profile__label'>Имя</div>     
        <div className='profile__data'>{currentUser.name}</div>
        </div>   
        <div className='profile__dividing-line'></div>
        <div className='profile__wrapper'>  
        <div  className='profile__label'>
          Email
        </div>  
        <div className='profile__data'>{currentUser.email}</div>
        </div> 
        </div>
        <button className="profile__edit-btn" onClick={handleOpenProfileEdit}>Редактировать</button>
        <button className="profile__exit " onClick={onSignout}>Выйти из аккаунта</button>
        
            
        </section>
        </main>
        <EditProfilePopup />
        </>
    );
}

export default Profile;