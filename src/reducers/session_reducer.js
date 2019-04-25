const DEFAULT_STATE = {
  login: false,
  register: true,
  user: {
    id: null,
    name: null,
    projects: {}
  }
};

const userSessionReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return action.payload.data
    case 'SIGN_OUT':
      return { ...DEFAULT_STATE };
    case 'REGISTER':
      return {register: action.payload}
    default:
      return state
  }
};

export default userSessionReducer;