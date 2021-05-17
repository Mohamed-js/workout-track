import React, { useEffect } from 'react';
import { fetchMovements } from '../actions';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovements);
  });

  return <div>Homee</div>;
};

export default Home;
