import React from 'react';
import { useHistory } from 'react-router';
import ProgressChart from '../components/progress/Chart';
import ProgressItem from '../components/progress/ProgressItem';

const Progress = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (user === null) {
    history.push('/');
  }
  let weightLeftPercent;
  let bmi;
  let state;
  let stateTo;
  let heightSquare;
  let bestWeight;
  let weightLeft;
  let weightBuild;
  if (user) {
    heightSquare = (user.height / 100) ** 2;
    bestWeight = 23.5 * heightSquare;
    weightLeft = user.current_weight - bestWeight;
    weightLeftPercent = (weightLeft / user.current_weight) * 100;
    bmi = user.current_weight / heightSquare;
    weightBuild = (
      ((user.current_weight - user.last_weight) / user.last_weight)
      * 100
    ).toFixed(2);
    if (user.last_weight === 0) {
      weightBuild = 0;
    }

    state = weightBuild > 0 ? 'Built' : 'Lost';
    stateTo = weightLeft < 0 ? 'build' : 'lose';
  }

  return (
    <>
      {user && (
        <div className="container">
          <div className="white-bg rounded full-width progress">
            <ProgressItem
              percent="true"
              value={String(bmi.toFixed(2))}
              text="BMI"
            />
            <ProgressItem
              value={String(Math.abs(weightBuild))}
              text={`${state} weight`}
            />
            {(bmi > 24.9 || bmi < 18.5) && (
              <ProgressItem
                value={String(Math.abs(weightLeftPercent.toFixed(2)))}
                text={`Weight to ${stateTo}`}
              />
            )}
          </div>
          {(bmi > 24.9 || bmi < 18.5) && (
            <h6 className="grey text-center">
              Your have to
              {' '}
              {stateTo}
              {' '}
              <strong className="big">{Math.abs(weightLeft).toFixed(2)}</strong>
              {' '}
              kg to achive the perfect weight.
            </h6>
          )}
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
          <br />
          <h6 className="grey text-center m-0 mb">
            Your tracked movements progress
          </h6>
          <div className="white-bg rounded full-width progress flex-col grey height">
            <ProgressChart />
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default Progress;
