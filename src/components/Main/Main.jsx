import React from 'react';
import './Main.css'
import landingLogo from '../../images/landing-logo.png'
import photo from '../../images/photo.png';
import arrowIcon from '../../images/arrow-icon.svg'

function Main() {
    return (
        <main className="landing">
            <section className="intro">
               <div className='intro__wrapper'>
               <img className='into__image' src={landingLogo} alt="Изображение глобуса с надписью web"></img>
               <div className='intro__container'>
               <h1 className="intro__title">Учебный проект студента факультета Веб&#8209;разработки.</h1> 
               <p className="intro__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
               <a href="#aboutProject">
               <button className="intro__button">Узнать больше</button>
               </a>
               </div>
               </div> 
            </section>
            <section className="project section" id='aboutProject'>
                <h2 className="section__title">О проекте</h2>
                <div className='section__dividing-line'></div>
                <article className="description">
                    <div className='description__column'>
                        <h3 className="desctiption__title">Дипломный проект включал 5 этапов</h3>
                        <p className="desctiption__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='description__column'>
                        <h3 className="desctiption__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="desctiption__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </article>
                <div className="timeline">
                    <div className='timeline__component timeline__component_backend'>1 неделя</div>
                    <div className='timeline__component timeline__component_frontend'>4 недели</div>
                    <p className="timeline__subtitle">Back-end</p>
                    <p className="timeline__subtitle">Front-end</p>
                </div>
            </section>
            <section className="technologies">
            <div className='section'>   
            <h2 className="section__title">Технологии</h2>
            <div className='section__dividing-line'></div>
            <h3 className='technologies__title'>7 технологий</h3>
            <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="technologies__list list">
                <li>
                    <div className='technologies__item'>HTML</div>
                </li>
                <li>
                    <div className='technologies__item'>CSS</div>
                </li>
                <li>
                    <div className='technologies__item'>JS</div>
                </li>
                <li>
                    <div className='technologies__item'>React</div>
                </li>
                <li>
                    <div className='technologies__item'>Git</div>
                </li>
                <li>
                    <div className='technologies__item'>Express.js</div>
                </li>
                <li>
                    <div className='technologies__item'>mongoDB</div>
                </li>
            </ul>
            </div> 
            </section>
            <section className="portfolio section">
            <h2 className="section__title">Студент</h2>
            <div className='section__dividing-line'></div>
            <article className="about">
                <div className="about__wrapper">
                <h3 className="about__name">Кристина</h3>
                <p className="about__occupation">Фронтенд-разработчик</p>
                <p className="about__background">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis sem massa, id fringilla est rhoncus a. Nulla facilisi. Phasellus bibendum nec enim ac convallis. Nulla ut dui non massa rutrum euismod. In congue ex eu felis consectetur vulputate. Morbi mattis lacus ipsum, ut imperdiet diam luctus nec. Donec egestas urna non mattis mollis.</p>
                <a href="https://github.com/CristinaDaily" className="about__github link" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
                <img src={photo} alt="Фотография" className="about__picture" />
            </article>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className="portfolio__list list">
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/how-to-learn" className="portfolio__link link" target="_blank" rel="noreferrer" >Статичный сайт</a>
                <i className='portfolio__icon'>
                <img src={arrowIcon} alt="иконка для перехода" />
                </i>
                </li >
                <div className="portfolio__line"></div>
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/russian-travel" className="portfolio__link  link" target="_blank" rel="noreferrer" >Адаптивный сайт</a>
                <i className='portfolio__icon'>
                <img src={arrowIcon} alt="иконка для перехода" />
                </i>
                </li>
                <div className="portfolio__line"></div>
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/react-mesto-api-full-gha" className="portfolio__link  link" target="_blank" rel="noreferrer" >Oдностраничное приложение</a>
                <i className='portfolio__icon'>
                <img src={arrowIcon} alt="иконка для перехода" />
                </i>
                </li>

             </ul>   

            </section>
        </main>
    );
}

export default Main;