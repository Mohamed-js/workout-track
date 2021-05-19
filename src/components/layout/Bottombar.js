import {
  faChartLine,
  faChartPie,
  faChartBar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { useHistory } from 'react-router';

const Bottombar = () => {
  const history = useHistory();
  return (
    <h2 className="flex-row bottombar">
      <div className="nav-item">
        <FontAwesomeIcon
          icon={faChartBar}
          onClick={() => history.push('/new-record')}
        />
        <p>New count</p>
      </div>
      <div className="nav-item active">
        <FontAwesomeIcon
          icon={faChartLine}
          onClick={() => history.push('/home')}
        />
        <p>Movements</p>
      </div>
      <div className="nav-item ">
        <FontAwesomeIcon icon={faChartPie} onClick={() => history.back} />
        <p>Your progress</p>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon
          icon={faEllipsisH}
          onClick={() => {
            history.push('/more');
          }}
        />
        <p>More</p>
      </div>
    </h2>
  );
};

export default Bottombar;
