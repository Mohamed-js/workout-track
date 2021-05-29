import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { newRecord } from '../../Helper';
import { fetchUserRecords } from '../../actions';

const NewSpecificRecord = () => {
  const { id } = useParams(':id');
  const [count, setCount] = useState(0);
  const [circle, setCircle] = useState();
  const [message, setMessage] = useState();
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (!user) {
    history.push('/');
  }
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchUserRecords(user.authentication_token));
    }
  });

  const trackedMovements = useSelector((state) => state.user.trackedMovements);
  let exercise;
  if (trackedMovements) {
    exercise = trackedMovements.filter((x) => String(x.id) === id);
  }

  const handleStart = (e) => {
    if (exercise) {
      setCircle(true);
      e.target.style.display = 'none';
    }
  };

  const handleRec = async () => {
    setCircle(false);
    setCount(document.getElementById('circle').value);
    document.getElementById('start').style.display = 'inline-block';
    const message = await newRecord(user.authentication_token, exercise[0].id, count);
    setMessage(message);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="container">
      {message && message.message && (
        <h4 className="alert-good">{message.message}</h4>
      )}
      {exercise && <h3 className="grey text-center">{exercise[0].name.toUpperCase()}</h3>}
      <div className="control-row">
        {circle && (
          <button
            type="button"
            id="rec"
            className="btn active m-auto rec"
            onClick={handleRec}
          >
            RECORD +
          </button>
        )}
      </div>

      <button
        type="button"
        id="start"
        className="btn start active v-bold"
        onClick={handleStart}
      >
        START
      </button>

      {circle && (
        <div className="range-container">
          <button type="button" id="circle" className="btn circle active">
            {count}
            <h6 className="m-0">Times</h6>
          </button>
          <input
            className="custom-select"
            type="range"
            defaultValue="0"
            min="0"
            max="100"
            onChange={handleCount}
          />
        </div>
      )}
    </div>
  );
};

export default NewSpecificRecord;
