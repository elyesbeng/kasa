import React from "react";
import './Apropos.scss';
import imgBanner from '../images/imageBannerApropos.png';
import MenuDeroulant from '../pageLogements/menuDeroulant';

function Apropos(){
    return (
        <div className="container">
            <section className="Banner">
                <img src={imgBanner}></img>
            </section>
            <section className="content">
                <MenuDeroulant title={"Fiabilité"} description={"Les annonces postées sur Kasa garantissent une fiabilité totale."} />
                <MenuDeroulant title={"Service"} description={"texte2"} />
                <MenuDeroulant title={"Respect"} description={"texte3"} />
                <MenuDeroulant title={"Securité"} description={"texte4"} />
            </section>
        </div>
        
    );
};

export default Apropos;