import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { signin } from '../../Helper';

const Login = () => {
  const history = useHistory();
  const [credits, setCredits] = useState({
    name: '',
    password: '',
  });
  const [failure, setFailure] = useState();

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure('');
    const respond = await signin(credits);
    if (respond[0] === undefined)
      return setFailure('Sorry, you entered wrong credits!');
    setFailure('');
    sessionStorage.setItem('current_user', JSON.stringify(respond[0]));
    history.push('/home');
  };
  return (
    <>
      <h1>Login</h1>
      {failure && <span className="alert-wrong">{failure}</span>}
      <form onSubmit={handleSubmit} className="signup">
        <input
          onChange={handleChange}
          type="text"
          className="name"
          name="name"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          className="password"
          name="password"
          required
        />

        <input type="submit" className="submit" />
      </form>
    </>
  );
};

export default Login;
