const movementsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_MOVEMENTS':
      return { ...state, movements: action.payload };

    default:
      return state;
  }
};

export default movementsReducer;
