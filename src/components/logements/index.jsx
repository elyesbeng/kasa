import React from "react";
import Logements from './logements.js'
import Banner from '../Banner/banner.js'
import imgBanner from '../images/imgBanner2.png';

function Home(){
    return (
        <div className="homePage">
        <Banner title={"Chez vous, partout et ailleurs"} image={imgBanner}/>
        <Logements />
        </div>
    );
}

export default Home;