import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUntrackedMovements } from '../../actions';
import { newMovement } from '../../Helper';

const Addmove = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('current_user'));

  useEffect(() => {
    if (user) {
      dispatch(fetchUntrackedMovements(user.authentication_token));
    }
  }, [dispatch, user]);

  const handleClick = (e) => {
    newMovement(user.authentication_token, e.target.id);
    e.target.disabled = true;
    e.target.style.backgroundColor = '#4caf50';
    e.target.textContent = 'Subscribed';
    dispatch(fetchUntrackedMovements(user.authentication_token));
  };

  const { movements } = useSelector((state) => state.untrackedMovements);

  return (
    <>
      <div className="grid container">
        {movements
          && movements.map((movement) => (
            <div key={movement.id} className="grid-item">
              <div className="img-container">
                <img src={movement.image} alt={movement.name} />
              </div>
              <div>
                <h6 className="m-0 text-center">
                  {movement.name.toUpperCase()}
                </h6>
                <button
                  type="button"
                  id={movement.id}
                  onClick={handleClick}
                  className="btn m-auto active sub"
                >
                  Subscribe +
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Addmove;
