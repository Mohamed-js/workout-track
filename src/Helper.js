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

export const newMovement = async (username, movement_id) => {
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

export const newRecord = async (username, movement_id, movement_count) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/records/new/${username}/${movement_id}/${movement_count}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return respond;
};

export const movementUserTopscore = async (user_id, movement_id) => {
  const respond = await fetch(
    `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/${user_id}/${movement_id}/topscore`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return respond;
};
