import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { useHistory } from 'react-router';

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="flex-row navbar">
      <h4 className="header">Workout Track</h4>

      <h3 className="back">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => history.goBack()}
        />
      </h3>
    </div>
  );
};

export default Navbar;
