import React, { useState } from 'react';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import logements from '../../logements.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import './pageLogements.scss';
import MenuDeroulant from './menuDeroulant';
import Notation from './Notation';

function PageLogements() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? logements.length - 1 : prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === logements.length - 1 ? 0 : prevIndex + 1));
    };

    const currentLogement = logements[currentIndex];
    const currentPicture = currentLogement.pictures[currentIndex];

    return (
        <div>
            <section className='sectionPageLogements'>
            <div className='CarouselImages'>
                <img src={currentPicture} className='imageLogement' />
                <FontAwesomeIcon icon={faAngleLeft} className='fleche-gauche' onClick={handleLeftArrowClick} />
                <FontAwesomeIcon icon={faAngleRight} className='fleche-droite' onClick={handleRightArrowClick} />
                </div>
                <div className='titreEtLocalisation'>
                <div>
                <h1 className='titreLogement'>{currentLogement.title}</h1>
                <p className='location'>{currentLogement.location}</p>
            </div>
                <div style={{ paddingRight: '10%' }}>
                    <div className='noteEtProprietaire'>
                            <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
                            <p className='HostName'>{currentLogement.host.name}</p>
                    </div>
                    <div className='rate'>
                        <Notation rating={currentLogement.rating}/>
                    </div>
                </div>
                </div>
                <div className='tags'>
                    {currentLogement.tags.map((tag, index) => (
                        <div key={index} className='tag'>{tag}</div>
                    ))}
                </div>
                <div className='DescriptionEtEquipements'>
                    <MenuDeroulant title={"Description"} description={currentLogement.description} />
                    <MenuDeroulant title={"Equipements"} description={currentLogement.equipments} />
                </div>
            </section>
                    </div>
    );
}

export default PageLogements;