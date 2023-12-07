import React from 'react';
import './Techs.css';

function Techs(props) {
    return (
        <section className="technologies">
            <div className='section'>   
            <h2 className="section__title">Технологии</h2>
            <div className='section__dividing-line'></div>
            <h3 className='technologies__title'>7 технологий</h3>
            <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="technologies__list list">
                <li>
                    <div className='technologies__item '>HTML</div>
                </li>
                <li>
                    <div className='technologies__item '>CSS</div>
                </li>
                <li>
                    <div className='technologies__item'>JS</div>
                </li>
                <li>
                    <div className='technologies__item '>React</div>
                </li>
                <li>
                    <div className='technologies__item '>Git</div>
                </li>
                <li>
                    <div className='technologies__item '>Express.js</div>
                </li>
                <li>
                    <div className='technologies__item '>mongoDB</div>
                </li>
            </ul>
            </div> 
            </section>
    );
}

export default Techs;