const DEFAULT_STATE = {
  project: [{
    title: "Spiderwoman"
  }]
};

const projectReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    // case 'GET_PROJECT_TITLE':
    //   return {title: title}
    default:
      return state
  }
};

export default projectReducer; 