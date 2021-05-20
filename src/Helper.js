export const signup = async (credits) => {
  const respond = await fetch(
    'https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/users/sign-up',
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(credits),
    },
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const signin = async (credits) => {
  const respond = await fetch(
    'https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/users/sign-in',
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(credits),
    },
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const newMovement = async (userID, movementID) => {
  const respond = await fetch(
    'https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/movements/new',
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({ user_id: userID, movement_id: movementID }),
    },
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const newRecord = async (userID, movementID, movementCount) => {
  const respond = await fetch(
    'https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/records/new',
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        user_id: userID,
        movement_id: movementID,
        movement_count: movementCount,
      }),
    },
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const movementUserTopscore = async (userID, movementID) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/${userID}/${movementID}/topscore`,
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const updateProfile = async (
  userID,
  Weight,
  Height,
  leftArm,
  rightArm,
) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/profile/${userID}/${Weight}/${Height}/${leftArm}/${rightArm}`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        user_id: userID,
        weight: Weight,
        height: Height,
        left_arm: leftArm,
        right_arm: rightArm,
      }),
    },
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};
