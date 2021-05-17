const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return { ...state, user: action.payload };
    case 'STORE_USER_MOVEMENTS':
      return { ...state, movements: action.payload };
    default:
      return state;
  }
};

export default userReducer;
