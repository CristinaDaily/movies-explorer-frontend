import React from 'react';
import './Portfolio.css';
import photo from '../../../images/photo.png';
import arrowIcon from '../../../images/arrow-icon.svg';

function Portfolio() {
    return (
        <section className="portfolio section">
            <h2 className="section__title"></h2>
            <div className='section__dividing-line'></div>
            <article className="about">
                <div className="about__wrapper">
                <h3 className="about__name">Kristina</h3>
                <p className="about__occupation">Junior Frontend Developer</p>
                <p className="about__background">I'm a Frontend Developer with a passion for creating user-friendly interfaces. While working in another field  I consistently demonstrated a strong affinity for technology and actively engaged in software implementation projects, collaborating closely with engineering teams. Last year I decided to challenge myself and pursue my dream to become a developer. I have completed an intensive year-long program, gaining hands-on experience on multiple training projects.  As a quick learner adept at collaborative work, I thrive in team environments and excel at communicating with stakeholders to ensure project success.
 </p>
                <a href="https://github.com/CristinaDaily" className="about__github link" target="_blank" rel="noreferrer" >GitHub link</a>
                </div>
                <img src={photo} alt="Фотография" className="about__picture" />
            </article>
            <h3 className='portfolio__title'>My other projects</h3>
            <ul className="portfolio__list list">
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/russian-travel" className="portfolio__link  link" target="_blank" rel="noreferrer" >
                <span>Responsive landing Page</span>
                <img src={arrowIcon} alt="иконка для перехода"  className='portfolio__icon'/>
                </a>
                </li>
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/react-mesto-api-full-gha" className="portfolio__link  link" target="_blank" rel="noreferrer" >
                <span>One page application</span>
                <img src={arrowIcon} alt="иконка для перехода"  className='portfolio__icon'/>
                </a>
                </li>
                <li className='portfolio__item'>
                <a href="https://github.com/CristinaDaily/how-to-learn" className="portfolio__link link" target="_blank" rel="noreferrer" >
                    <span>Static page</span>
                <img src={arrowIcon} alt="иконка для перехода"  className='portfolio__icon'/>
                </a>
                </li >

             </ul>   

            </section>
    );
}

export default Portfolio;