import React from 'react';
import './Main.css'

import photo from '../../images/photo.png';
import arrowIcon from '../../images/arrow-icon.svg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';

function Main() {
    return (
        <div className='page'>
        <Header />
        <main className="landing">
            < Promo />
            < AboutProject />
            < Techs />
            <Portfolio />       
        </main>
        <Footer />
        </div>
    );
} 


export default Main;