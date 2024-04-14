import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
  return (
    <div className='rate'>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className='star'>
          {index <= rating ? (
            <FontAwesomeIcon icon={faStar} />
          ) : (
            <FontAwesomeIcon icon="fa-regular fa-star" />
          )}
        </div>
      ))}
    </div>
  );
}

export default StarRating;