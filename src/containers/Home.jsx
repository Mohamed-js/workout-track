import React, { useEffect } from 'react';
import { fetchMovements } from '../actions';
import { useDispatch } from 'react-redux';
import Tracked from '../components/home/Tracked';

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  
  useEffect(() => {
    dispatch(fetchMovements);
  }, [dispatch]);

  return (
    <div className="container">
      <h5 className="hello">Your tracked workout...</h5>
      <Tracked user={user} />
    </div>
  );
};

export default Home;
