import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import comparables_reducer from './comparables_reducer';
import financial_reducer from './financial_reducer';
import movie_reducer from './movie_reducer';
import myprojects_reducer from './myprojects_reducer';
import newaccount_reducer from './newaccount_reducer';
import project_reducer from './project_reducer';
import session_reducer from './session_reducer';
import token_reducer from './token_reducer'

const rootReducer = combineReducers({
  comparables: comparables_reducer,
  finance: financial_reducer,
  movies: movie_reducer,
  myprojects: myprojects_reducer,
  newaccount: newaccount_reducer,
  project: project_reducer,
  session: session_reducer,
  token: token_reducer,
  form: formReducer
});

export default rootReducer; 