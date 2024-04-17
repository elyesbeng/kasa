import React  from "react";
import Logo from '../images/LOGO.png';
import './footer.scss';

function footer(){
    return <footer>
        <img src={Logo} className="LogoBlanc"></img>
        <p>2020 Kasa. All rights reserved</p>
    </footer>
}

export default footer;