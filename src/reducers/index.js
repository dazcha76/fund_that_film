import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movie_reducer from './movie_reducer';
import financial_reducer from './financial_reducer';
import navbar_reducer from './navbar_reducer';

const rootReducer = combineReducers({
  movies: movie_reducer,
  finance: financial_reducer,
  navbar: navbar_reducer,
  form: formReducer
});

export default rootReducer; 