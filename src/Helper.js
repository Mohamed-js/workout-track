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
