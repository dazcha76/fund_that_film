const DEFAULT_STATE = {
  id: null,
  title: '',
  poster_path: ''
};

const typeaheadReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'TITLE_SUGGESTIONS':
      return action.payload.data.results
    default:
      return state
  }
};

export default typeaheadReducer; 