import React from 'react';
import './Main.css'
import landingLogo from '../../images/landing-logo.png'

function Main() {
    return (
        <main className="landing">
            <section className="intro">
               <div className='intro__wrapper'>
               <img className='into__image' src={landingLogo} alt="Изображение глобуса с надписью web"></img>
               <div className='intro__container'>
               <h1 className="intro__title">Учебный проект студента факультета Веб-разработки.</h1> 
               <p className="intro__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
               <a href="#aboutProject">
               <button className="intro__button">Узнать больше</button>
               </a>
               </div>
               </div> 
            </section>
            <section className="project" id='aboutProject'></section>
            <section className="technologies"></section>
            <section className="portflio"></section>
        </main>
    );
}

export default Main;