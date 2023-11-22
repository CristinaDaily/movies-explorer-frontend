import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'
import logo from '../../images/logo.svg';
import './Header.css';
import accountIcon from '../../images/account-icon.svg';
import menu from '../../images/header-icon.svg';
import menuLanding from '../../images/header-icon-landing.svg'


function Header() {
    // Хук для отслеживания размеров окна
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    });
  const [loggedIn, setLoggedIn] = useState(true);
    
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      });
    };
    
  useEffect(() => {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    window.addEventListener('resize', handleResize);
    
    return () => {
    window.removeEventListener('resize', handleResize);
    };
    }, []);

  const location = useLocation();

  const isLandingPage = location.pathname === '/';

  return (
    <div className={`header ${isLandingPage && 'header_type_landing'}`}>
        <div className='header__container'>
      <img src={logo} alt="Лого" className="header__logo logo" />
      {loggedIn ? (
      windowSize.width > 900 ? (
        <>
        <nav>
        <ul className='header-wrapper'>
            <li className='link'>
                <Link to='/movies' className={`header__link link ${isLandingPage ? 'header__link_type_landing' : 'header__link_type_movieapp' }`}>Фильмы</Link>
            </li>
            <li className='link'>
            <Link to='/saved-movies' className={`header__link link ${isLandingPage ? 'header__link_type_landing' : 'header__link_type_movieapp' }`}>Сохраненные фильмы</Link>
            </li>
        </ul>
        </nav>
        
        <button className= {`header__profile-btn ${isLandingPage ? 'header__profile-btn_type_landing' : 'header__profile-btn_type_movieapp' }`}>
            <div className={`round ${isLandingPage ? 'round_type_landing':'round_type_movieapp' }`}>
                <img src={accountIcon} alt="Иконка профиля" className='header__icon' />
            </div>
      
      Аккаунт
    </button>
        </>
      ) : (
        <img src={isLandingPage ? menuLanding :menu } alt="иконка меню с навигацией" className="header__menu" />
      )
      ) : (
        <nav className='header__navigation'>
            <Link to='/signup' className="header__registration link">Регистрация</Link>
    
            <button className='header__loggin'>
            <Link to='/signin' className="link header__loggin_type_btn">Войти</Link>
            </button>

        </nav>

        
      )}
    </div>
    </div>
  );
}

export default Header;