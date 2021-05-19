import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { newRecord } from '../Helper';

const NewRecord = () => {
  const [exercise, setExercise] = useState();
  const [count, setCount] = useState(0);
  const [circle, setCircle] = useState();
  const [message, setMessage] = useState();

  const user = JSON.parse(sessionStorage.getItem('current_user'));

  const trackedMovements = useSelector((state) => state.user.trackedMovements);
  const options = [''];
  trackedMovements.forEach((movement) => {
    options.push({ name: movement.name, id: movement.id });
  });

  const handleChoose = (e) => {
    setExercise(e.target.value);
  };

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
    const message = await newRecord(user.id, exercise, count);
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
      <h4>Choose the exercise:</h4>
      <div className="control-row">
        <select
          name="exercise"
          id="exercise"
          onChange={handleChoose}
          value={exercise}
        >
          {options.map((option) => (
            <option key={`${option.name}${option.id}`} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {circle && (
          <button
            type="button"
            id="rec"
            className="btn active rec"
            onClick={handleRec}
          >
            RECORD +
          </button>
        )}
      </div>

      <button
        type="button"
        id="start"
        className="btn start active"
        onClick={handleStart}
      >
        START
      </button>

      {circle && (
        <div className="range-container">
          <button type="button" id="circle" className="btn circle active">
            {count}
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

export default NewRecord;
