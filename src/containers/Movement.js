import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fetchUserRecords } from '../actions';
import { movementUserTopscore } from '../Helper';

const Showpage = () => {
  const { id } = useParams(':id');
  const [topScore, setTopScore] = useState();
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('current_user'));

  useEffect(() => {
    dispatch(fetchUserRecords(user.id));
    movementUserTopscore(user.id, id).then((data) => setTopScore(data));
  }, []);

  const allrecords = useSelector((state) => state.user.records);
  const records = allrecords.filter((x) => `${x.movement_id}` === id);
  const rec = records[0];

  return (
    <>
      {rec && (
        <div className="container text-center">
          <div className="img-container full-width">
            <img src={rec.movement.image} alt="record" />
          </div>
          <div className="flex-row space-between">
            <h5 className="grey">{rec.movement.category.toUpperCase()}</h5>
            <h5 className="grey">{rec.movement.name.toUpperCase()}</h5>
          </div>
          <Link to={`/new-record/${id}`} className="green">
            New score
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          {topScore && (
            <h3 className="grey bold">
              Top score:
              {topScore.movement_count}
            </h3>
          )}

          <h5 className="today grey">Today</h5>
          {records.map((move) => {
            const date = new Date();
            const timestamp = new Date(move.created_at);
            let color = move.movement_count > 70 ? '#4caf50' : '#3e98c7';
            if (move.movement_count < 20) {
              color = '#ffc107';
            }
            return (
              <div key={move.id}>
                {date.toLocaleDateString()
                  === new Date(move.created_at).toLocaleDateString() && (
                  <div>
                    <div className="card-row">
                      <div className="row">
                        <div className="img">
                          <CircularProgressbar
                            value={move.movement_count}
                            text={`${move.movement_count}%`}
                            styles={buildStyles({
                              textColor: color,
                              pathColor: color,
                              trailColor: '#cdcdcd',
                            })}
                          />
                        </div>
                        <div className="baseline-col">
                          <h5 className="m-0 grey">
                            {timestamp.toLocaleDateString()}
                          </h5>
                          <h6 className="m-0 grey">
                            {move.movement_count}
                            {' '}
                            times
                          </h6>
                        </div>
                      </div>
                      <div className="img-container full-width img-container-adjust">
                        <img src={rec.movement.image} alt="record" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <h5 className="today grey">Past records</h5>
          {records.map((move) => {
            const today = new Date();
            const timestamp = new Date(move.created_at);
            let color = move.movement_count > 70 ? '#4caf50' : '#3e98c7';
            if (move.movement_count < 20) {
              color = '#ffc107';
            }
            return (
              <div key={move.id}>
                {today.toLocaleDateString()
                  !== timestamp.toLocaleDateString() && (
                  <div>
                    <div className="card-row">
                      <div className="row">
                        <div className="img">
                          <CircularProgressbar
                            value={move.movement_count}
                            text={`${move.movement_count}%`}
                            styles={buildStyles({
                              textColor: color,
                              pathColor: color,
                              trailColor: '#cdcdcd',
                            })}
                          />
                        </div>
                        <div className="baseline-col">
                          <h5 className="m-0 grey">
                            {timestamp.toLocaleDateString()}
                          </h5>
                          <h6 className="m-0 grey">
                            {move.movement_count}
                            {' '}
                            times
                          </h6>
                        </div>
                      </div>
                      <div className="img-container full-width img-container-adjust">
                        <img src={rec.movement.image} alt="record" />
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
      )}
    </>
  );
};

export default Showpage;
