import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { movementUserTopscore } from '../Helper';

const Showpage = () => {
  const { id } = useParams(':id');
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  const allrecords = useSelector((state) => state.user.records);
  const [topScore, setTopScore] = useState();

  const records = allrecords.filter((x) => `${x.movementID}` === id);
  const rec = records[0];

  useEffect(() => {
    movementUserTopscore(user.id, id).then((data) => setTopScore(data));
  }, []);

  return (
    <div className="container text-center">
      <div className="img-container full-width">
        <img src={rec.movement.image} alt="record" />
      </div>
      <div className="flex-row space-between">
        <h5>{rec.movement.category.toUpperCase()}</h5>
        <h5>{rec.movement.name.toUpperCase()}</h5>
      </div>

      {topScore && (
      <h3>
        Top score:
        {topScore.movementCount}
      </h3>
      )}

      <h5 className="today">Today</h5>
      {records.map((move) => {
        const date = new Date();

        return (
          <div key={move.id}>
            {date.toLocaleDateString()
              === new Date(move.created_at).toLocaleDateString() && (
              <div>
                <div className="card-row">
                  <div className="row">
                    <div className="img">
                      <CircularProgressbar
                        value={move.movementCount}
                        text={`${move.movementCount}%`}
                      />
                    </div>
                    <h4>{move.movementCount}</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <h5 className="today">Past records</h5>
      {records.map((move) => {
        const date = new Date();
        return (
          <div key={move.id}>
            {date.toLocaleDateString()
              !== new Date(move.created_at).toLocaleDateString() && (
              <div>
                <div className="card-row">
                  <div className="row">
                    <div className="img">
                      <CircularProgressbar
                        value={move.movementCount}
                        text={`${move.movementCount}%`}
                      />
                    </div>
                    <h4>{move.movementCount}</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Showpage;
