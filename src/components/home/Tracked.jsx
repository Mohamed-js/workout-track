import React from 'react';
import { Link } from 'react-router-dom';

const Tracked = ({ user }) => {
  console.log(user);
  return (
    <div>
      <Link to="/new" className="add-movement">
        Track +
      </Link>

      <div>
        <div className="img-container">
          <img
            src={
              'https://cdnb.artstation.com/p/assets/images/images/027/557/839/original/ryan-edwards-pushups.gif?1591877044'
            }
            alt={'asd'}
          />
        </div>
        <div>
          <img
            src={
              ' https://i.pinimg.com/originals/30/04/1d/30041df56a924326c7194762a17f52a5.gif'
            }
            alt={'asd'}
          />
        </div>
        <h6>{'asd'}</h6>
      </div>
      <div className="grid">
        {user.movements &&
          user.movements.map((movement) => {
            return (
              <div>
                <div className="img-container">
                  <img src={movement.image} alt={movement.name} />
                </div>
                <h6>{movement.name}</h6>
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
