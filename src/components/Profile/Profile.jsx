import React from 'react';
import './Profile.css'
import EditProfilePopup from '../EditPfofilePopup/EditProfilePopup';
import Header from '../Header/Header';

function Profile() {
    return (
      <>
      <Header />
        <div className='profile'>
            <h2 className="profile__title">Привет, Виталий!</h2>
            <div className='profile__container' >
        <div className='profile__wrapper'>  
        <div className='profile__label'>Имя</div>     
        <div className='profile__data'>Виталий</div>
        </div>   
        <div className='profile__dividing-line'></div>
        <div className='profile__wrapper'>  
        <div  className='profile__label'>
          Email
        </div>  
        <div className='profile__data'>pochta@yandex.ru</div>
        </div> 
        </div>
        <button className="profile__edit-btn ">Редактировать</button>
        <button className="profile__exit ">Выйти из аккаунта</button>
        
            
        </div>
        <EditProfilePopup />
        </>
    );
}

export default Profile;