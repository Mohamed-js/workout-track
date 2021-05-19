import React from 'react';
import { faRulerHorizontal, faTape, faWeight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholder from '../../assets/placeholder.png';

const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem('current_user'));

  return (
    <div className="text-center pt-0">
      <div className="img-container m-auto active full-width center">
        <img className="circle" src={placeholder} alt="Profile" />
      </div>
      <h3 className="m-0 container">{user.name.toUpperCase()}</h3>

      <div className="grid container">
        <div className="profile-grid-item btn white-bg">
          <FontAwesomeIcon icon={faWeight} className="grey" />
          <h5 className="m-0">Weight</h5>
          <h4>
            {user.current_weight}
            {' '}
            kg
          </h4>
        </div>
        <div className="profile-grid-item btn white-bg">
          <FontAwesomeIcon icon={faTape} className="grey" />
          <h5 className="m-0">Height</h5>
          <h4>
            {user.height}
            {' '}
            cm
          </h4>
        </div>
        <div className="profile-grid-item btn white-bg">
          <FontAwesomeIcon icon={faRulerHorizontal} className="grey" />
          <h5 className="m-0">Left arm size</h5>
          <h4>{user.current_left_arm_size}</h4>
        </div>
        <div className="profile-grid-item btn white-bg">
          <FontAwesomeIcon icon={faRulerHorizontal} className="grey" />
          <h5 className="m-0">Right arm size</h5>
          <h4>{user.current_right_arm_size}</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
