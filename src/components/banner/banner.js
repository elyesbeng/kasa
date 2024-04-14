import React from 'react';
import './banner.scss';
import Logo from '../images/LOGO.png';


function Banner() {
    return <header className="banner">
                <img src={Logo} className='Logo'></img>
                <nav>
                    <a href='index.html'>Accueil</a>
                    <a href='#'>A propos</a>
                </nav>
            </header>
}

export default Banner