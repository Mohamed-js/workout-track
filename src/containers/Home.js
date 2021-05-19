import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchTrackedMovements, fetchUserRecords } from '../actions';
import Tracked from '../components/home/Tracked';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (!user) {
    history.push('/');
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchTrackedMovements(user.id));
      dispatch(fetchUserRecords(user.id));
      dispatch({ type: 'STORE_USER', payload: user });
    }
  }, [dispatch, user]);

  return (
    <div className="container">
      <Tracked />
    </div>
  );
};

export default Home;
