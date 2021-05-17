import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Tracked = () => {
  const trackedMovements = useSelector((state) => state.user.movements);

  return (
    <div>
      <Link to="/new" className="btn active">
        Track +
      </Link>
      <br />
      <br />
      <div className="grid">
        {trackedMovements &&
          trackedMovements.map((movement) => {
            const top = movement.tracked_movements.sort(
              (x) => x.movement_count
            )[0];
            return (
              <Link to={`/show/${movement.id}`} className="btn">
                <div className="grid-item">
                  <div className="img-container">
                    <img src={movement.image} alt={movement.name} />
                  </div>
                  <div className="text-center name-container">
                    <h6>{movement.name.toUpperCase()}</h6>
                    <p>
                      <span>{top.movement_count} </span>
                      Times
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

        {!trackedMovements && (
          <h4 className="caution">Click on 'Track +' to track items.</h4>
        )}
      </div>
    </div>
  );
};

export default Tracked;
