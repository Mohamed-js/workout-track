import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Tracked = () => {
  const trackedMovements = useSelector((state) => state.user.trackedMovements);
  const records = useSelector((state) => state.user.records);
  let latest = 0;
  return (
    <div>
      <Link to="/new" className="btn active">
        Track +
      </Link>
      <br />
      <br />
      <div className="grid">
        {trackedMovements
          && trackedMovements.map((movement) => {
            if (records) {
              // eslint-disable-next-line
              latest = records.filter((x) => x.movementID === movement.id)[0];
            }

            return (
              <Link
                key={movement.id}
                to={`/show/${movement.id}`}
                className="btn"
              >
                <div className="grid-item">
                  {}
                  <div className="img-container">
                    <img src={movement.image} alt={movement.name} />
                  </div>
                  <div className="text-center name-container">
                    <h6>{movement.name.toUpperCase()}</h6>
                    <p>
                      {latest && (
                      <span>
                        {latest.movementCount}
                        {' '}
                      </span>
                      )}
                    </p>
                    <h6>latest</h6>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Tracked;
