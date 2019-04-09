const DEFAULT_STATE = {
    success: false, 
    login: false, 
    'check-signin': false,
    user: {
      id: null,
      name: null,
      projects: null
    }
};

const userSessionReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return action.payload.data
    case 'SIGN_OUT':
      return action.payload.data
    default:
      return state
  }
};

export default userSessionReducer;