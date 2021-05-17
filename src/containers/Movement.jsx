import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
const Showpage = () => {
  const { id } = useParams(':id');
  const records = useSelector((state) => state.user.movements);

  const rec = records[id - 1];

  return (
    <div className="container text-center">
      <h3>{rec.category}</h3>
      <h4>{rec.name}</h4>
      <div className="img-container">
        <img src={rec.image} alt="" />
      </div>
      {rec.tracked_movements.map((move) => {
        const date = new Date();
        return (
          <>
            {date.toLocaleDateString() ===
              new Date(move.created_at).toLocaleDateString() && (
              <>
                <h5 className="today">Today</h5>
                <div className="card-row">
                  <h4>{move.movement_count}</h4>
                </div>
              </>
            )}
          </>
        );
      })}

      {rec.tracked_movements.map((move) => {
        const date = new Date();
        return (
          <>
            {date.toLocaleDateString() !==
              new Date(move.created_at).toLocaleDateString() && (
              <>
                <h5 className="today">Past records</h5>
                <div className="card-row">
                  <h4>{move.movement_count}</h4>
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Showpage;
