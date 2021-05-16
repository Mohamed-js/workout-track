export const fetchMovements = () => {
  return (dispatch) => {
    fetch(
      `https://diagnoser-proxy.herokuapp.com/https://workout-track-api.herokuapp.com/api/v1/movements`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'STORE_MOVEMENTS', payload: data });
        console.log('hay');
      });
  };
};
