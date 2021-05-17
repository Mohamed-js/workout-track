import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovements } from '../../actions';

const Addmove = () => {
  const dispatch = useDispatch();
  const [failure, setFailure] = useState();

  useEffect(() => {
    dispatch(fetchMovements());
  }, [dispatch]);

  const { movements } = useSelector((state) => state.movements);

  return (
    <div className="grid">
      {movements &&
        movements.map((movement) => {
          return (
            <div className="grid-item">
              <div className="img-container">
                <img src={movement.image} alt={movement.name} />
              </div>
              <h4>{movement.name.toUpperCase()}</h4>
              <Link to={'.'} className="btn m-auto active">
                Subscribe +
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Addmove;
