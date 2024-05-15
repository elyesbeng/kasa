import React from "react";
import Logements from './logements.js'
import Banner from '../Banner/banner.js'
import imgBanner from '../images/imgBanner.png';

function Home(){
    return (
        <div>
        <Banner title={"Chez vous, partout et ailleurs"} image={imgBanner}/>
        <Logements />
        </div>
    );
}

export default Home;