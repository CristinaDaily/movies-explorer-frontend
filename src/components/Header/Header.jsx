import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'
import logo from '../../images/logo.svg';
import './Header.css';

import menu from '../../images/header-icon.svg';
import menuLanding from '../../images/header-icon-landing.svg';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';



function Header({ loggedIn }) {

  const [ isMenuActive, setMenuActive ] = useState(false);
  const [ windowSize, setWindowSize ] = useState ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const location = useLocation();
  const isLandingPage = isActiveLink('/');
  
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      });
  }

  function handleOpenMenuClick(){
    setMenuActive(!isMenuActive);
  }

  function closeMenu() { 
    setMenuActive(false);
  }  
    
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

  
  function isActiveLink (path) {
    return location.pathname === path; 
  } 


  return (
    <>
    <header className={`header ${isLandingPage && 'header_type_landing'}`}>
      <div className='header__container'>
      <Link to="/" className="header__logo logo">
        <img src={logo} alt="Лого" />
      </Link>
      {loggedIn ? (
        windowSize.width > 900 ? (
          < Navigation isLandingPage ={isLandingPage} isActiveLink={isActiveLink} />
        ) : (
          <nav>
            <img src={isLandingPage ? menuLanding : menu } alt="иконка меню с навигацией" className="header__menu button" onClick={handleOpenMenuClick}/>
          </nav>
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
    </header>
    < Menu  isOpen={isMenuActive} onClose={closeMenu} isActiveLink={isActiveLink}/>
    </>
  );
}

export default Header;