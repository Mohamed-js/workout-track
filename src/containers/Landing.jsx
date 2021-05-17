import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="sign">
      <h1 className="welcome">WELCOME TO WORKOUT TRACK</h1>
      <Link to="/signup" className="sign-up">
        SIGN UP
      </Link>
      <hr />
      <h6 className="ask">or</h6>
      <Link to="/login" className="login">
        LOGIN
      </Link>
    </div>
  );
};

export default Landing;
