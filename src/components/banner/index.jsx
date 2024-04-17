import React from 'react';
import './banner.scss';
import Logo from '../images/LOGO.png';
import { Link } from 'react-router-dom';


function Banner() {
    return <header className="banner">
                <img src={Logo} className='Logo'></img>
                <nav>
                    <Link to='/'>Accueil</Link>
                    <Link to='/Apropos'>A propos</Link>
                </nav>
            </header>
}

export default Banner