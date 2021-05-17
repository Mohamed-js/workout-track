import React from 'react';
import { Link } from 'react-router-dom';

const Tracked = ({ user }) => {
  return (
    <div>
      <Link to="/new" className="add-movement">
        Track +
      </Link>

      <div className="grid">
        {user.movements &&
          user.movements.map((movement) => {
            return (
              <div className="grid-item">
                <div className="img-container">
                  <img src={movement.image} alt={movement.name} />
                </div>
                <h4>{movement.name.toUpperCase()}</h4>
              </div>
            );
          })}

        {!user.movements && (
          <h4 className="caution">Click on 'Track +' to track items.</h4>
        )}
      </div>
    </div>
  );
};

export default Tracked;
