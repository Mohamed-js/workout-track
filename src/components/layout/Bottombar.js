import {
  faChartPie,
  faPlus,
  faEllipsisH,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

const Bottombar = () => {
  const history = useHistory();
  const handleClick = (e) => {
    if (e.target.classList.contains('nav-item')) {
      const navs = document.querySelectorAll('.nav-item');
      for (let i = 0; i < navs.length; i += 1) {
        const x = navs[i];
        x.style.backgroundColor = '#323943';
        x.style.color = '#b0b4b9';
      }
      e.target.style.color = 'white';
      e.target.firstElementChild.style.color = 'white';
      e.target.style.backgroundColor = '#41b5e8';
      history.push(`/${e.target.getAttribute('nav')}`);
    }
  };

  return (
    <h2 className="flex-row bottombar">
      <button
        type="button"
        className="nav-item"
        nav="new-record"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faPlus} />
        New score
      </button>
      <button
        type="button"
        className="nav-item"
        nav="home"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faRunning} />
        Movements
      </button>
      <button
        type="button"
        className="nav-item"
        nav="progress"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faChartPie} />
        Your progress
      </button>
      <button
        type="button"
        className="nav-item"
        nav="more"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
        More
      </button>
    </h2>
  );
};

export default Bottombar;
