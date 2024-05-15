import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';



function StarRating({ rating }) {
  // Fonction pour générer une liste de composants d'étoiles
  regularStar.className = "grayStar"
  const renderStars = () => {
    const stars = [];
    // Boucle sur les cinq étoiles possibles
    for (let i = 1; i <= 5; i++) {
      // Vérifie si l'étoile doit être pleine ou vide en fonction de la note
      const starIcon = i <= rating ? solidStar : regularStar;
      // Ajoute l'élément d'étoile à la liste
      stars.push(
        <div key={i} className='star'>
          <FontAwesomeIcon icon={starIcon} />
        </div>
      );
    }
    return stars;
  };

  return (
    <div className='rate'>
      {/* Appelle la fonction renderStars pour générer les étoiles */}
      {renderStars()}
    </div>
  );
}

export default StarRating;