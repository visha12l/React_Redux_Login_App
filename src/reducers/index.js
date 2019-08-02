export default (state, action) => {
  switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        email: action.payload.email,
        isUserLoggedIn: action.payload.isUserLoggedIn,
      }
    case 'userLogout':
    return {
      isUserLoggedIn: action.payload.isUserLoggedIn,
    }
    default:
      return state;
  }
};
