import React, { useState } from 'react';
import { signup } from '../../Helper';

const SignUp = () => {
  const [credits, setCredits] = useState({
    name: '',
    password: '',
    birth_date: '',
  });
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const respond = await signup(credits);
    setSuccess(respond.message);
  };

  return (
    <>
      <br />
      <h1 className="text-center ">SignUp</h1>

      <div className="flex-col center">
        {success && <span className="alert-good">{success}</span>}
        {success && success !== 'Successfully signed up!' && (
          <span className="alert-bad">{success}</span>
        )}
      </div>
      <br />
      <form onSubmit={handleSubmit} className="flex-col">
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
          placeholder="Password"
          required
        />
        <label htmlFor="date" className="flex-col">
          Date of birth:
          <input
            id="date"
            onChange={handleChange}
            type="date"
            className="birth_date"
            name="birth_date"
            required
          />
        </label>
        <input
          type="submit"
          className="submit btn active login"
          value="SIGN UP"
        />
      </form>
    </>
  );
};

export default SignUp;
