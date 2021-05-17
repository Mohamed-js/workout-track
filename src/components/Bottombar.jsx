import {
  faChartLine,
  faChartPie,
  faChartBar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { useHistory } from 'react-router';
const Bottombar = ({ header = 'Workout Track', back }) => {
  const history = useHistory();
  return (
    <h2 className="flex-row bottombar">
      <div className="nav-item">
        <FontAwesomeIcon icon={faChartBar} onClick={() => history.back} />
        <p>New count</p>
      </div>
      <div className="nav-item active">
        <FontAwesomeIcon icon={faChartLine} onClick={() => history.back} />
        <p>Movements</p>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faChartPie} onClick={() => history.back} />
        <p>Your progress</p>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon
          icon={faEllipsisH}
          onClick={() => sessionStorage.removeItem('current_user')}
        />
        <p>More</p>
      </div>
    </h2>
  );
};

export default Bottombar;
