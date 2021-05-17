export const fetchMovements = (id) => {
  return (dispatch) => {
    fetch(
      `https://diagnoser-proxy.herokuapp.com/https://workout-track-api.herokuapp.com/api/v1/movements/${id}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'STORE_MOVEMENTS', payload: data });
      });
  };
};

export const fetchUserMovements = (id) => {
  return (dispatch) => {
    fetch(
      `https://diagnoser-proxy.herokuapp.com/https://workout-track-api.herokuapp.com/api/v1/user/${id}/movements`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'STORE_USER_MOVEMENTS', payload: data });
      });
  };
};
