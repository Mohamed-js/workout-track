import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const ProgressItem = (props) => {
  const { value, text } = props;
  let val = value;
  let color = '#3e98c7';
  if (text === 'BMI' && (value > 24.9 || value < 18.5)) {
    color = '#ffc107';
  }
  if (text === 'BMI' && value > 30) {
    color = 'crimson';
  }
  if (text === 'BMI' && value === 'NaN') {
    color = 'crimson';
    val = 0;
  }

  return (
    <div className="progress-item text-center">
      <CircularProgressbar
        value={val}
        text={`${val}%`}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
          trailColor: '#cdcdcd',
        })}
      />
      <h6 className="m-0 grey">{text}</h6>
    </div>
  );
};

export default ProgressItem;

ProgressItem.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
};

ProgressItem.defaultProps = {
  value: '1',
  text: '',
};
