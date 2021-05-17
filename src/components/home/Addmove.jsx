import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovements } from '../../actions';
import { newMovement } from '../../Helper';

const Addmove = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchMovements(user.id));
  }, [dispatch, user.id]);

  const handleClick = (e) => {
    newMovement(user.name, e.target.id);
    e.target.disabled = true;
    e.target.style.backgroundColor = '#4caf50';
    e.target.textContent = 'Subscribed';
    dispatch(fetchMovements());
  };

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
              <button
                id={movement.id}
                onClick={handleClick}
                className="btn m-auto active">
                Subscribe +
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Addmove;
