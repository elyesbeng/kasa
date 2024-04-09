import React, { useState } from 'react';
import logements from '../../logements.json'; // Importez le fichier JSON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Importez les icônes solides


function CreationLogements() {
    const [startIndex, setStartIndex] = useState(0); // État pour suivre l'indice de début de la liste logementsLimites
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
    };
  
    return (
      <section className='sectionLogements'>
        <FontAwesomeIcon icon={faAngleLeft} className='fleche-gauche' onClick={handleLeftArrowClick} /> {/* Ajoutez un gestionnaire d'événements onClick */}
        {/* Utilisation de la méthode map pour créer des éléments JSX pour chaque logement */}
        {logementsLimites.map((logement, index) => (
          // Utilisation de la clé (key) pour identifier de manière unique chaque élément de la liste
          <div key={index}>
            <a className='LogementsCards' id={logement.id} href='../public/pageLogement.html'>
              <img src={logement.cover} alt={logement.title} />
              <p>{logement.title}</p>
              {/* Affichez d'autres propriétés de logement selon vos besoins */}
            </a>
          </div>
        ))}
        <p className='numeroSlide'> {numeroSlide}/4 </p>
        <FontAwesomeIcon icon={faAngleRight} className='fleche-droite' onClick={handleRightArrowClick} /> {/* Ajoutez un gestionnaire d'événements onClick */}
      </section>
    );
}

export default CreationLogements;
