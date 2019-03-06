import { combineReducers } from 'redux';
import movie_reducer from './movie_reducer';
import details_reducer from './details_reducer';

const rootReducer = combineReducers({
  movies: movie_reducer,
  details: details_reducer
});

export default rootReducer;