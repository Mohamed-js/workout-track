import React, { useEffect } from 'react';
import { fetchMovements, fetchUserMovements } from '../actions';
import { useDispatch } from 'react-redux';
import Tracked from '../components/home/Tracked';

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('current_user'));

  useEffect(() => {
    dispatch(fetchMovements);
    dispatch(fetchUserMovements(user.id));
    dispatch({ type: 'STORE_USER', payload: user });
  }, []);

  return (
    <div className="container">
      <h5 className="hello">Your tracked workout...</h5>
      <Tracked />
    </div>
  );
};

export default Home;
