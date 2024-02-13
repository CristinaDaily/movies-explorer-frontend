import React from 'react';
import './Promo.css';
import landingLogo from '../../../images/landing-logo.png';

function Promo() {
    return (
        <section className="promo">
               <div className='promo__wrapper'>
               <img className='promo__image' src={landingLogo} alt="Изображение глобуса с надписью web"></img>
               <div className='promo__container'>
               <h1 className="promo__title">Trainee Program Final Project: Movie Explorer</h1> 
               <p className="promo__subtitle">Scroll down to discover more about this project, or click 'Sign Up' to access the application.</p>
               <a href="#aboutProject">
               <button className="promo__button button">Learn more</button>
               </a>
               </div>
               </div> 
            </section>
    );
}

export default Promo;