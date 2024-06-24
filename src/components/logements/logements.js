import React, { useState } from 'react';
import logements from '../../logements.json'; // Importez le fichier JSON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Importez les icônes solides
import './App.scss'
import { Link } from 'react-router-dom';


function CreationLogements() {
    {/**const [startIndex, setStartIndex] = useState(0); // État pour suivre l'indice de début de la liste logementsLimites
    const [numeroSlide, setNumeroSlide] = useState(1);

    // Limiter le nombre d'éléments à afficher en fonction de l'indice de début
    const logementsLimites = logements.slice(startIndex, startIndex + 6);

    // Fonction de gestionnaire d'événements pour l'icône de flèche gauche
    const handleLeftArrowClick = () => {
        // Si l'indice de début est supérieur à 0, réduire l'indice de début de 6
        if (startIndex > 0) {
            setStartIndex(prevIndex => prevIndex - 6);
            setNumeroSlide(prevNumeroSlide => prevNumeroSlide - 1); // Mettre à jour le numéro de slide
        } else {
            // Si l'indice de début est 0, revenir à 12
            setStartIndex(18);
            setNumeroSlide(4); // Mettre à jour le numéro de slide en conséquence
        }
    };

    // Fonction de gestionnaire d'événements pour l'icône de flèche droite
    const handleRightArrowClick = () => {
        // Vérifiez si l'indice de début est inférieur à la longueur totale des logements moins 6
        if (startIndex < logements.length - 6) {
            setStartIndex(prevIndex => prevIndex + 6);
            setNumeroSlide(prevNumeroSlide => prevNumeroSlide + 1); // Mettre à jour le numéro de slide
        } else {
            // Si l'indice de début est égal ou supérieur à la longueur totale des logements moins 6, réinitialisez-le à 0
            setStartIndex(0);
            setNumeroSlide(1); // Mettre à jour le numéro de slide en conséquence
        }
    };*/}
  
    return (
      <section className='sectionLogements'>
        {logements.map((logement, index) => (
          <div key={index}>
            <Link className='LogementsCards' id={logement.id} to={`/pageLogement/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} />
              <p>{logement.title}</p>
            </Link>
          </div>
        ))}
      </section>
    );
}

export default CreationLogements;
