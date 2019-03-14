import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import comparables_reducer from './comparables_reducer';
import movie_reducer from './movie_reducer';
import financial_reducer from './financial_reducer';
import project_reducer from './project_reducer';

const rootReducer = combineReducers({
  comparables: comparables_reducer,
  movies: movie_reducer,
  finance: financial_reducer,
  project: project_reducer,
  form: formReducer
});

export default rootReducer; 