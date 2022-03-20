import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { faTape, faWeight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholder from '../../assets/placeholder.png';
import { updateProfile, userProfile } from '../../Helper';

const Profile = () => {
  const [userInfo, setUserInfo] = useState('');
  const [updating, setUpdating] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [profile, setProfile] = useState('');

  useEffect(() => {
    if (user) {
      userProfile(user.authentication_token).then((data) => {
        const userInfo = data;
        setUserInfo(userInfo);
        setProfile({ ...profile, height: userInfo.height, weight: userInfo.current_weight });
      });
    }
  }, [userProfile]);

  const handleClick = () => {
    setUpdating(true);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const btn = document.getElementById('save');
    btn.textContent = 'Please wait...';
    updateProfile(
      user.authentication_token,
      profile.weight,
      profile.height,
    ).then(() => {
      setUpdating(false);
    });
    userProfile(user.authentication_token).then((data) => {
      const userInfo = data;
      setUserInfo(userInfo);
      setProfile({ ...profile, height: userInfo.height });
      setProfile({ ...profile, weight: userInfo.current_weight });
    });
  };

  return (
    <div className="text-center p-0 container">
      <div className="img-container m-auto active full-width center">
        <img className="circle" src={placeholder} alt="Profile" />
      </div>
      <>
        {userInfo && (
          <>
            <h3 className="m-0 p">{userInfo.name.toUpperCase()}</h3>
            {updating || (
              <>
                <button
                  className="btn active"
                  type="button"
                  onClick={handleClick}
                >
                  Update profile
                </button>
                <div className="grid p">
                  <div className="profile-grid-item btn white-bg">
                    <FontAwesomeIcon icon={faWeight} className="grey" />
                    <h5 className="m-0 grey">Weight</h5>
                    <h4 className="grey">
                      {profile.weight}
                      {' '}
                      kg
                    </h4>
                  </div>
                  <div className="profile-grid-item btn white-bg">
                    <FontAwesomeIcon icon={faTape} className="grey" />
                    <h5 className="m-0 grey">Height</h5>
                    <h4 className="grey">
                      {profile.height}
                      {' '}
                      cm
                    </h4>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>

      {updating && (
        <>
          <button
            id="save"
            className="btn green"
            type="button"
            onClick={handleSubmit}
          >
            Save
          </button>
          <div className="grid p">
            <div className="profile-grid-item btn white-bg grey">
              <FontAwesomeIcon icon={faWeight} className="grey" />
              <h5 className="m-0 grey">Weight</h5>
              <input
                type="number"
                className="grey"
                name="weight"
                defaultValue={profile.weight}
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
                defaultValue={profile.height}
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
