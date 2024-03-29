import React from 'react';
import {Link} from 'react-router-dom'
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg';

function Navigation({ isLandingPage, isActiveLink }) {
    
    return (
      <>
        <nav className='navigation'>
          <ul className='navigation__wrapper list '>
            <li >
                <Link to='/movies' className={`navigation__link link 
                ${isLandingPage ? 'navigation__link_type_landing' : 'navigation__link_type_movieapp'}
                ${isActiveLink('/movies') && 'navigation__link_active' } `}>Movies</Link>
            </li>
            <li >
            <Link to='/saved-movies' className={`navigation__link link 
            ${isLandingPage ? 'navigation__link_type_landing' : 'navigation__link_type_movieapp'} 
            ${isActiveLink('/saved-movies') && 'navigation__link_active' }`}>Saved movies</Link>
            </li>
          </ul>
        </nav>
        <Link to='/profile'className='link'>
        <button className= {`button navigation__profile-btn ${isLandingPage ? 'navigation__profile-btn_type_landing' : 'navigation__profile-btn_type_movieapp' }`}>
            <div className={`round ${isLandingPage ? 'round_type_landing':'round_type_movieapp' }`}>
                <img src={accountIcon} alt="Иконка профиля" className='navigation__icon' />
            </div> 
        Account
        </button>
    </Link>
    </>
    );
}

export default Navigation;