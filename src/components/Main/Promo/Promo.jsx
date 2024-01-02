import React from 'react';
import './Promo.css';
import landingLogo from '../../../images/landing-logo.png';

function Promo() {
    return (
        <section className="promo">
               <div className='promo__wrapper'>
               <img className='promo__image' src={landingLogo} alt="Изображение глобуса с надписью web"></img>
               <div className='promo__container'>
               <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1> 
               <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
               <a href="#aboutProject">
               <button className="promo__button button">Узнать больше</button>
               </a>
               </div>
               </div> 
            </section>
    );
}

export default Promo;