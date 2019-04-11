const DEFAULT_STATE = {
  suggestions: []
};

const typeaheadReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'TITLE_SUGGESTIONS':
      return {suggestions: action.payload.data.results}
    default:
      return state
  }
};

export default typeaheadReducer; 