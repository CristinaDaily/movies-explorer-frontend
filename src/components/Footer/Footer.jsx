import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <h3 className='footer__copyright'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__line' ></div>
            <div className='footer__container'>
            <p className='footer__date'>© 2023</p>
            <ul className="footer__links list">
            <li>
                <a href="https://practicum.yandex.ru"
                target="_blank"
                rel="noreferrer"
                className="footer__link link">Яндекс.Практикум</a>
            </li>
            <li>
                <a href="https://github.com/CristinaDaily"
                target="_blank"
                className="footer__link link"
                rel="noreferrer">Github</a>
            </li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer;