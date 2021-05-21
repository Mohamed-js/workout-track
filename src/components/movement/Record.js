import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Record = (props) => {
  const {
    move, rec, timestamp, color, today,
  } = props;
  return (
    <div>
      {today && (
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
                <h5 className="m-0 grey">{timestamp.toLocaleDateString()}</h5>
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
};

export default Record;

Record.propTypes = {
  move: PropTypes.instanceOf(Object),
  today: PropTypes.bool,
  rec: PropTypes.instanceOf(Object),
  color: PropTypes.string,
  timestamp: PropTypes.instanceOf(Object),
};

Record.defaultProps = {
  move: {},
  today: false,
  rec: {},
  color: '',
  timestamp: {},
};
