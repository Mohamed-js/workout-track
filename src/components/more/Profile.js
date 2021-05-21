import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import {
  faTape,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholder from '../../assets/placeholder.png';
import { signin, updateProfile } from '../../Helper';
import { fetchTrackedMovements } from '../../actions';

const Profile = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  const [updating, setUpdating] = useState(false);
  const [profile, setProfile] = useState({
    weight: user.current_weight,
    height: user.height,
  });

  const handleClick = () => {
    setUpdating(true);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const respond = await signin({
      name: user.name,
      password: user.password,
    });
    sessionStorage.setItem('current_user', JSON.stringify(respond[0]));
  };

  const handleSubmit = () => {
    updateProfile(
      user.id,
      profile.weight,
      profile.height,
    ).then(() => {
      handleLogin().then(() => {
        dispatch(fetchTrackedMovements(user.id));
        setUpdating(false);
      });
    });
  };

  return (
    <div className="text-center pt-0">
      <div className="img-container m-auto active full-width center">
        <img className="circle" src={placeholder} alt="Profile" />
      </div>
      <h3 className="m-0 container">{user.name.toUpperCase()}</h3>

      {updating || (
        <>
          <button className="btn active" type="button" onClick={handleClick}>
            Update profile
          </button>
          <div className="grid container">
            <div className="profile-grid-item btn white-bg">
              <FontAwesomeIcon icon={faWeight} className="grey" />
              <h5 className="m-0 grey">Weight</h5>
              <h4 className="grey">
                {user.current_weight}
                {' '}
                kg
              </h4>
            </div>
            <div className="profile-grid-item btn white-bg">
              <FontAwesomeIcon icon={faTape} className="grey" />
              <h5 className="m-0 grey">Height</h5>
              <h4 className="grey">
                {user.height}
                {' '}
                cm
              </h4>
            </div>
          </div>
        </>
      )}

      {updating && (
        <>
          <button className="btn green" type="button" onClick={handleSubmit}>
            Save
          </button>
          <div className="grid container">
            <div className="profile-grid-item btn white-bg grey">
              <FontAwesomeIcon icon={faWeight} className="grey" />
              <h5 className="m-0 grey">Weight</h5>
              <input
                type="number"
                className="grey"
                name="weight"
                defaultValue={user.current_weight}
                onChange={handleChange}
              />
              kg
            </div>
            <div className="profile-grid-item btn white-bg grey">
              <FontAwesomeIcon icon={faTape} className="grey" />
              <h5 className="m-0 grey">Height</h5>
              <input
                type="number"
                className="grey"
                name="height"
                defaultValue={user.height}
                onChange={handleChange}
              />
              cm
            </div>
          </div>
        </>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;
