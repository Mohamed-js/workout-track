import React from 'react';
import ProgressItem from '../components/progress/ProgressItem';

const Progress = () => {
  const user = JSON.parse(sessionStorage.getItem('current_user'));

  const heightSquare = user.height ** 2 / 100;
  //   const lastBmi = user.last_weight / heightSquare;
  const bmi = user.current_weight / heightSquare;
  const weightBuild = ((
    (user.current_weight - user.last_weight)
    / user.last_weight) * 100
  ).toFixed(2);
  const state = weightBuild > 0 ? 'build' : 'loss';
  return (
    <div className="container">
      <div className="white-bg rounded full-width progress">
        <ProgressItem percent="true" value={(bmi * 100).toFixed(2)} text="BMI" />
        <ProgressItem
          value={Math.abs(weightBuild)}
          text={`Weight ${state}`}
        />
        <ProgressItem value={12} text="Weight loss" />
      </div>
      <br />
      <div className="white-bg rounded full-width progress grey">
        <ul>
          <li>Underweight </li>
          <li>Normal weight </li>
          <li>Overweight </li>
          <li>Obesity </li>
        </ul>
        <ul>
          <li>- BMI smaller than 18.5</li>
          <li>- BMI = 18.5–24.9</li>
          <li>- BMI = 25–29.9</li>
          <li>- BMI of 30 or greater</li>
        </ul>
      </div>
    </div>
  );
};

export default Progress;
