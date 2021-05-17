import React, { useState } from 'react';
import { signup } from '../../Helper';

const SignUp = () => {
  const [credits, setCredits] = useState({
    name: '',
    password: '',
    birth_date: '',
  });

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(credits);
  };
  return (
    <>
      <h1>SignUp</h1>
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
        <input
          onChange={handleChange}
          type="date"
          className="birth_date"
          name="birth_date"
          required
        />
        <input type="submit" className="submit" />
      </form>
    </>
  );
};

export default SignUp;
