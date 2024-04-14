import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function DropdownDescription({ title, description }) { // Ajoutez la prop `title` ici
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
                {isDropdownOpen ? (
                    <>
                        {title} <FontAwesomeIcon icon={faAngleUp} />
                    </>
                ) : (
                    <>
                        {title} <FontAwesomeIcon icon={faAngleDown} />
                    </>
                )}
            </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default DropdownDescription;