const DEFAULT_STATE = {
  login: false,
  register: true,
  user: null
  // user:{
    // id: null,
    // name: null,
    // projects:{}
  // }
};

const userSessionReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      console.log("SIGN IN PAYLOAD", action.payload)
      // return { ...state, login: true };
      // return { user: action.payload.data.user.name, login: true };
      return { user: localStorage.getItem('user'), login: true };
    case 'SIGN_OUT':
      // return { ...DEFAULT_STATE };
      return { ...state, login: false };
    case 'REGISTER':
      return {register: action.payload}
    case 'LOGGED_IN?':
      return {login: action.login}
    default:
      return state
  }
};

export default userSessionReducer;