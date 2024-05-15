import React from "react";
import './Apropos.scss';
import imgBanner from '../images/imageBannerApropos.png';
import MenuDeroulant from '../menuDeroulant/menuDeroulant';
import Banner from "../Banner/banner";

function Apropos(){
    return (
        <div className="container">
            <Banner image={imgBanner} />
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