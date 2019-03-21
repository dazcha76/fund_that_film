const DEFAULT_STATE = {
  signedIn: false
};

const signInReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return {project: action.title}
    default:
      return state
  }
};

export default signInReducer; 