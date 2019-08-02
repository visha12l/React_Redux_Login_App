export const setLoginData = (data) => {
  return {
    type: 'userLogin',
    payload: {
      ...data,
      isUserLoggedIn: true
    }
  }
}

export const logoutUser = () => {
  return {
    type: 'userLogout',
    payload: {
      isUserLoggedIn: false
    }
  }
}
