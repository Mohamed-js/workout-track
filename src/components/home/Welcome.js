import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Welcome = ({ user }) => {
  const { name } = user;
  const handleClick = (e) => {
    e.target.parentElement.style.display = 'none';
  };
  return (
    <div className="welcome-dialog text-center">
      {/* <h6> */}
      <button type="button" className="btn active" onClick={handleClick}>×</button>
      {/* </h6> */}
      <h5>
        Hi
        {' '}
        {name.toUpperCase()}
        ,
      </h5>

      <h6>
        Please
        {' - '}
        <Link to="/profile" className="active">
          {' '}
          click here
          {' '}
        </Link>
        {' - '}
        to update your profile...
        {' '}
      </h6>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  user: PropTypes.instanceOf(Object),
};

Welcome.defaultProps = {
  user: {
    name: 'user',
  },
};
