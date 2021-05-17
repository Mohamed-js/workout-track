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
      <FontAwesomeIcon icon={faChartBar} onClick={() => history.back} />
      <FontAwesomeIcon icon={faChartLine} onClick={() => history.back} />
      <FontAwesomeIcon icon={faChartPie} onClick={() => history.back} />
      <FontAwesomeIcon icon={faEllipsisH} onClick={() => history.back} />
    </h2>
  );
};

export default Bottombar;
