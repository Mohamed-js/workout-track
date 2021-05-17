const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return { user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
