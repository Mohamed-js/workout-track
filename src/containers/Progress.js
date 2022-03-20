import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ProgressChart from '../components/progress/Chart';
import ProgressItem from '../components/progress/ProgressItem';
import { userProfile } from '../Helper';

const Progress = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    if (user) {
      userProfile(user.authentication_token).then((data) => {
        const userInfo = data;
        setUserInfo(userInfo);
      });
    }
  }, []);

  if (userInfo === null) {
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
  if (userInfo) {
    heightSquare = (userInfo.height / 100) ** 2;
    bestWeight = 23.5 * heightSquare;
    weightLeft = userInfo.current_weight - bestWeight;
    weightLeftPercent = (weightLeft / userInfo.current_weight) * 100;
    bmi = userInfo.current_weight / heightSquare;
    weightBuild = (
      ((userInfo.current_weight - userInfo.last_weight) / userInfo.last_weight)
      * 100
    ).toFixed(2);
    if (userInfo.last_weight === 0) {
      weightBuild = 0;
    }

    state = weightBuild > 0 ? 'Built' : 'Lost';
    stateTo = weightLeft < 0 ? 'build' : 'lose';
  }

  return (
    <>
      {userInfo && (
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
          <div className="white-bg rounded over-flow-hidden full-width progress flex-col grey height">
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
