import React from 'react';
import './Portfolio.css';
import photo from '../../../images/photo.png';
import arrowIcon from '../../../images/arrow-icon.svg';

function Portfolio() {
    return (
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
                <a href="https://github.com/CristinaDaily/how-to-learn" className="portfolio__link link" target="_blank" rel="noreferrer" >
                    <span>Статичный сайт</span>
                <img src={arrowIcon} alt="иконка для перехода"  className='portfolio__icon'/>
                </a>
                </li >
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/russian-travel" className="portfolio__link  link" target="_blank" rel="noreferrer" >
                <span>Адаптивный сайт</span>
                <img src={arrowIcon} alt="иконка для перехода"  className='portfolio__icon'/>
                </a>
                </li>
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/react-mesto-api-full-gha" className="portfolio__link  link" target="_blank" rel="noreferrer" >
                <span>Oдностраничное приложение</span>
                <img src={arrowIcon} alt="иконка для перехода"  className='portfolio__icon'/>
                </a>
                </li>

             </ul>   

            </section>
    );
}

export default Portfolio;