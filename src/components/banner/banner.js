import React from 'react';
import './banner.scss';
import { Link } from 'react-router-dom'

function Banner() {
    return <header className="banner">
                <h1>Logo</h1>
                <nav>
                    <a href='index.html'>Accueil</a>
                    <Link to="/Apropos">A propos</Link>
                </nav>
            </header>
}

export default Banner