export const fetchUntrackedMovements = (id) => {
  return (dispatch) => {
    fetch(
      `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/${id}/untracked-movements`,
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

export const fetchTrackedMovements = (id) => {
  return (dispatch) => {
    fetch(
      `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/${id}/tracked-movements`,
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

export const fetchUserRecords = (id) => {
  return (dispatch) => {
    fetch(
      `https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1/user/${id}/records`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'STORE_USER_RECORDS', payload: data });
      });
  };
};
