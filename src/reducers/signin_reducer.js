const DEFAULT_STATE = {
  success: false,
  login: false
};

const signInReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return {project: action.login}
    default:
      return state
  }
};

export default signInReducer; 