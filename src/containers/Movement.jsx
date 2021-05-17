import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Showpage = () => {
  const { id } = useParams(':id');
  const records = useSelector((state) => state.user.movements);

  const rec = records[id - 1];

  return (
    <div className="container text-center">
      <div className="img-container full-width">
        <img src={rec.image} alt="record" />
      </div>
      <div className="flex-row space-between">
        <h5>{rec.category.toUpperCase()}</h5>
        <h5>{rec.name.toUpperCase()}</h5>
      </div>

      <h5 className="today">Today</h5>
      {rec.tracked_movements.map((move) => {
        const date = new Date();
        return (
          <>
            {date.toLocaleDateString() ===
              new Date(move.created_at).toLocaleDateString() && (
              <>
                <div className="card-row">
                  <div className="row">
                    <div className="img">
                      <CircularProgressbar
                        value={move.movement_count}
                        text={`${move.movement_count}%`}
                      />
                    </div>
                    <h4>{move.movement_count}</h4>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}
      <h5 className="today">Past records</h5>
      {rec.tracked_movements.map((move) => {
        const date = new Date();
        return (
          <>
            {date.toLocaleDateString() !==
              new Date(move.created_at).toLocaleDateString() && (
              <>
                <div className="card-row">
                  <div className="row">
                    <div className="img">
                      <CircularProgressbar value={20} text={`${30}%`} />
                    </div>
                    <h4>{move.movement_count}</h4>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Showpage;
