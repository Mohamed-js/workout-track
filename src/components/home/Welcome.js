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
      <button type="button" className="btn active danger" onClick={handleClick}>×</button>
      {/* </h6> */}
      <h4>
        Hi
        {' '}
        {name.toUpperCase()}
        ,
      </h4>

      <h5>
        Please
        {' - '}
        <Link to="/profile" className="active green">
          {' '}
          click here
          {' '}
        </Link>
        {' -  '}
        to complete your profile...
        {' '}
      </h5>
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
