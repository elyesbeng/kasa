import React, { useState } from 'react';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import logements from '../../logements.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './pageLogements.scss';
import imageBanner from '../images/imgBanner.png';
import MenuDeroulant from './menuDeroulant';

function PageLogements() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? logements.length - 1 : prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === logements.length - 1 ? 0 : prevIndex + 1));
    };

    const currentLogement = logements[currentIndex];

    return (
        <div>
            <section className='sectionPageLogements'>
                <FontAwesomeIcon icon={faAngleLeft} className='fleche-gauche' onClick={handleLeftArrowClick} />
                <img src={imageBanner} className='imageLogement' />
                <FontAwesomeIcon icon={faAngleRight} className='fleche-droite' onClick={handleRightArrowClick} />
                <div className='titreEtLocalisation'>
                <h1 className='titreLogement'>{currentLogement.title}</h1>
                <p className='location'>{currentLogement.location}</p>
                </div>
                <div className='tags'>
                    {currentLogement.tags.map((tag, index) => (
                        <div key={index} className='tag'>{tag}</div>
                    ))}
                </div>
                <MenuDeroulant description={currentLogement.description} />
                <<div className='equipements'>
                    {currentLogement.equipments.map((equipment, index) => (
                        <div key={index} className='equipement'>{equipment}</div>
                    ))}
                </div>>
                {/**
                <div className='noteEtProprietaire'>
                    <div>
                        <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
                        <p className='HostName'>{currentLogement.host.name}</p>
                    </div>
                    </div>*/}
            </section>
                    </div>
    );
}

export default PageLogements;