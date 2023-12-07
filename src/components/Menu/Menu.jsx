import React from "react";
import {Link} from 'react-router-dom'
import './Menu.css';
import accountIcon from '../../images/account-icon.svg'
function Menu({isOpen, onClose, isActiveLink}) {
    console.log(isOpen)

    return (
        <aside className={`menu ${isOpen && 'menu_active'} `}>
            <div className="menu__content">    
          <button
           type='button'
           aria-label='закрыть'
           className='menu__close'
           onClick={onClose}
           ></button>
            <ul className="menu__container">
                
                <li className="link">
                    <a href="/" 
                    className={`menu__item link ${isActiveLink('/') && 'menu__item_active'}`}>Главная</a>
                </li>
                <li className="link">
                    <a href="/movies" 
                    className={`menu__item link ${isActiveLink('/movies') && 'menu__item_active'}`}>Фильмы</a>
                </li>
                <li className="link">
                    <a href="/saved-movies" 
                    className={`menu__item link ${isActiveLink('/saved-movies') && 'menu__item_active'}`}>Сохранённые фильмы</a>
                </li>
            </ul>
            <Link to='/profile' className='link'>
            <button className='menu__account-btn navigation__profile-btn navigation__profile-btn_type_movieapp'>
            <div className='round round_type_movieapp'>
                <img src={accountIcon} alt="Иконка профиля" className='navigation__icon' />
            </div>
      
      Аккаунт
    </button>
    </Link> 
    </div>
    </aside>

    );
}

export default Menu;