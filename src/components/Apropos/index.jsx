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
                <MenuDeroulant title={"Service"} description={"La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou la perturbation du voisinage entraînerz une exclusion de la plateforme."} />
                <MenuDeroulant title={"Respect"} description={"La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou la perturbation du voisinage entraînerz une exclusion de la plateforme."} />
                <MenuDeroulant title={"Securité"} description={"La sécurité est la priorité de kasa. Aussi bien pour nos hotes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."} />
            </section>
        </div>
        
    );
};

export default Apropos;