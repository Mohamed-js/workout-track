import React from 'react';
import { useHistory } from 'react-router';
import { faSignOutAlt, faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const More = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (!user) {
    history.push('/');
  }
  return (
    <div className="container">
      <button
        type="button"
        className="logout flex-row btn space-between"
        onClick={() => {
          history.push('/profile');
        }}
      >
        PROFILE
        <FontAwesomeIcon icon={faPersonBooth} />
      </button>
      <br />
      <button
        type="button"
        className="logout flex-row btn space-between"
        onClick={() => {
          sessionStorage.removeItem('current_user');
          history.push('/');
        }}
      >
        LOGOUT
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  );
};

export default More;
