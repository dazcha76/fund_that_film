const DEFAULT_STATE = {

};

const projectReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'GET_PROJECT_INFO':
      return {project: action.payload}
    default:
      return state
  }
};

export default projectReducer; 