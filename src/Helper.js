export const signup = async (credits) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/users/sign-up`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(credits),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return respond;
};

export const signin = async (credits) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/users/sign-in`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(credits),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return respond;
};

export const getMovements = async () => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/https://workout-track-api.herokuapp.com/api/v1/movements`,
    { headers: { 'Content-Type': 'application/json' } }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return respond;
};

export const newMovement = async (username, movement_id) => {
  console.log(username);
  console.log(movement_id);
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/movements/new/${username}/${movement_id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return respond;
};
