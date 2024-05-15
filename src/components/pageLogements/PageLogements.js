import React, { useState, useEffect } from 'react';
import logements from '../../logements.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import './pageLogements.scss';
import MenuDeroulant from '../menuDeroulant/menuDeroulant';
import Notation from '../notation/Notation';
import { useParams, Navigate } from 'react-router-dom';
import PageErreur from '../pageErreur';


function PageLogements() {
    const { logementId } = useParams();
    const currentLogement = logements.find((logements) => logementId == logements.id);
    let [SelectPicture, setCurrentPicture] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentPicture(prevIndex => (prevIndex === 0 ? currentLogement.pictures.length - 1 : prevIndex - 1));
        if (SelectPicture > currentLogement.pictures.length) {
            SelectPicture = 0
        } 
    };

    const handleRightArrowClick = () => {
        setCurrentPicture(prevIndex => (prevIndex === currentLogement.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    if (!currentLogement){
        return(<Navigate replace to='/PageErreur' />)
        
    }
    else{
        
    

    

    return (
        <div>    
            {/**{ !currentLogement && <Navigate replace to='/PageErreur' />}*/}
            <section className='sectionPageLogements'>
            <div className='CarouselImages'>
                <img src={currentLogement.pictures[SelectPicture]} className='imageLogement' />
                {currentLogement.pictures.length > 1 && (
                        <>
                            <FontAwesomeIcon icon={faAngleLeft} className='fleche-gauche' onClick={ handleLeftArrowClick} />
                            <FontAwesomeIcon icon={faAngleRight} className='fleche-droite' onClick={ handleRightArrowClick} />
                            <p className='numeroSlide'> {SelectPicture+1}/{currentLogement.pictures.length} </p>
                        </>
                )}
            </div>    
            <div className='titreEtLocalisation'>
                <div>
                    <h1 className='titreLogement'>{currentLogement.title}</h1>
                    <p className='location'>{currentLogement.location}</p>
                </div>
                <div style={{ paddingRight: '10%' }}>
                    <div className='noteEtProprietaire'>
                            <div className='Proprietaire'>
                                <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
                                <p className='HostName'>{currentLogement.host.name}</p>
                            </div>
                            <div className='rate'>
                                <Notation rating={currentLogement.rating}/>
                            </div>
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
    );}
}

export default PageLogements;