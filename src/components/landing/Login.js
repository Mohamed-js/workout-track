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
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (user) {
    history.push('/home');
  }

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure('');
    const respond = await signin(credits);
    if (respond[0] === undefined) return setFailure('Sorry, you entered wrong credits!');
    setFailure('');
    sessionStorage.setItem('current_user', JSON.stringify(respond[0]));
    return history.push('/home');
  };
  return (
    <div className="flex-col">
      <h1 className="v-bold">Login</h1>
      <br />
      {failure && <span className="alert-bad">{failure}</span>}
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit} className="signup flex-col">
        <input
          onChange={handleChange}
          type="text"
          className="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          className="password"
          name="password"
          placeholder="*******"
          required
        />

        <input type="submit" className="login active" value="LOGIN" />
      </form>
    </div>
  );
};

export default Login;
