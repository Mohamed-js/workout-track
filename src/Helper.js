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

export const newMovement = async (username, movementID) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/movements/new/${username}/${movementID}`,
  )
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const newRecord = async (username, movementID, movementCount) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/records/new/${username}/${movementID}/${movementCount}`,
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
