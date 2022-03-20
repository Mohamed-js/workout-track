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

  const handleClick = () => {
    const btn = document.getElementById('login');
    btn.disabled = true;
    btn.style.backgroundColor = '#4caf50';
    btn.value = 'Wait...';
    btn.textContent = 'Wait...';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure('');
    handleClick();
    const respond = await signin(credits);
    if (respond && respond.failure) return setFailure(respond.failure);
    setFailure('');
    sessionStorage.setItem('current_user', JSON.stringify(respond));
    return history.push('/home');
  };

  if (failure) {
    const btn = document.getElementById('login');
    btn.disabled = false;
    btn.style.backgroundColor = '#41b5e8';
  }
  return (
    <div className="flex-col container">
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

        <input
          type="submit"
          id="login"
          className="login active"
          value="LOGIN"
        />
      </form>
    </div>
  );
};

export default Login;
