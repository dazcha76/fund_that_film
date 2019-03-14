const DEFAULT_STATE = {
  title1: '',
  title2: ''
}

const comparablesReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'STORE_MOVIE_COMPARISONS':
      return { ...state, title1: action.payload.title1, title2: action.payload.title2 }
    default:
      return state;
  }
}

export default comparablesReducer;
