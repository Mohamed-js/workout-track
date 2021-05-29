const baseURL = 'https://diagnoser-proxy.herokuapp.com/http://workout-track-api.herokuapp.com/api/v1';

export const fetchUntrackedMovements = (token) => (dispatch) => {
  fetch(`${baseURL}/untracked_movements`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'STORE_MOVEMENTS', payload: data });
    });
};

export const fetchTrackedMovements = (token) => (dispatch) => {
  fetch(`${baseURL}/tracked_movements`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'STORE_USER_MOVEMENTS', payload: data });
    });
};

export const fetchUserRecords = (token) => (dispatch) => {
  fetch(`${baseURL}/records`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'STORE_USER_RECORDS', payload: data });
    });
};
