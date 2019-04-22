const DEFAULT_STATE = {
  active: false
};

const navbarReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'TOGGLE_NAVBAR':
    console.log("ACTIVE STATE", action.payload)
      return {active: action.payload}
    default:
      return state
  }
};

export default navbarReducer;