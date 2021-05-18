import React from 'react';
import { useHistory } from 'react-router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logout = () => {
  const history = useHistory();
  return (
    <div className="container">
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

export default Logout;
