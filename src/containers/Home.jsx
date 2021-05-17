import React, { useEffect } from 'react';
import { fetchMovements } from '../actions';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import Bottombar from '../components/Bottombar';

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  useEffect(() => {
    dispatch(fetchMovements);
  });

  return (
    <div>
      <Navbar back="true" />
      <h5 className="hello"> Hello, {user.name}</h5>
    </div>
  );
};

export default Home;
