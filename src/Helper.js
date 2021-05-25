const baseURL = 'https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1';

export const signup = async (credits) => {
  const respond = await fetch(`${baseURL}/users`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify({ user: credits }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const signin = async (credits) => {
  const respond = await fetch(`${baseURL}/sessions`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify(credits),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const newMovement = async (token, movementID) => {
  const respond = await fetch(`${baseURL}/tracked_movements`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    method: 'post',
    body: JSON.stringify({ movement_id: movementID }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const newRecord = async (token, movementID, movementCount) => {
  const respond = await fetch(`${baseURL}/records`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    method: 'post',
    body: JSON.stringify({
      movement_id: movementID,
      movement_count: movementCount,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const movementUserTopscore = async (token, movementID) => {
  const respond = await fetch(`${baseURL}/records/${movementID}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const updateProfile = async (token, Weight, Height) => {
  const respond = await fetch(`${baseURL}/users/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    method: 'put',
    body: JSON.stringify({
      weight: Weight,
      height: Height,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const userProfile = async (token) => {
  const respond = await fetch(`${baseURL}/users/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};
