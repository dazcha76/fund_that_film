const DEFAULT_STATE = {

    title: "Spiderwoman"

};

const projectReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'GET_PROJECT_TITLE':
      return {project: action.title}
    default:
      return state
  }
};

export default projectReducer; 