import React, { useEffect } from 'react';
import { fetchMovements } from '../actions';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import Bottombar from '../components/Bottombar';
import Tracked from '../components/home/Tracked';

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  useEffect(() => {
    dispatch(fetchMovements);
  });

  return (
    <div>
      <Navbar back="true" />
      <h5 className="hello"> Hello, {user.name}.</h5>
      <h5 className="hello"> Your tracked movement...</h5>
      <Tracked user={user} />
    </div>
  );
};

export default Home;
