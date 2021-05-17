import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (user) history.push('/home');
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
