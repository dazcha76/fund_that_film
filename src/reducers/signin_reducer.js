const DEFAULT_STATE = {
    success: false, 
    login: false, 
    'check-signin': false
};

const signInReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return action.payload.data
    default:
      return state
  }
};

export default signInReducer; 