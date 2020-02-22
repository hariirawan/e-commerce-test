const initialState = {
  status: false
};
const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      return { ...state, status: true };
    default:
      return state;
  }
};

export default reducerLogin;
