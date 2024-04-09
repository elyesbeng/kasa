import React, { useState } from 'react';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import logements from '../../logements.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
            <Banner />
            <section className='sectionPageLogements'>
                <FontAwesomeIcon icon={faAngleLeft} className='fleche-gauche' onClick={handleLeftArrowClick} />
                <img src={currentLogement.picture} alt={currentLogement.title} />
                <FontAwesomeIcon icon={faAngleRight} className='fleche-droite' onClick={handleRightArrowClick} />
                <h1>{currentLogement.title}</h1>
                <p className='location'>{currentLogement.location}</p>
                <div className='tags'>
                    {currentLogement.tags.map((tag, index) => (
                        <div key={index} className='tag'>{tag}</div>
                    ))}
                </div>
                <div className='description'>{currentLogement.description}</div>
                <div className='equipements'>
                    {currentLogement.equipments.map((equipment, index) => (
                        <div key={index} className='equipement'>{equipment}</div>
                    ))}
                </div>
                <div className='noteEtProprietaire'>
                    <div>
                        <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
                        <p className='HostName'>{currentLogement.host.name}</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default PageLogements;