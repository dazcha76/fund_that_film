import types from './types';
import comparablesApi from '../apis/comparables.js'

export const getMovieData = () => {
  return async dispatch => {
    const response = await comparablesApi.get();
    console.log(response);

    dispatch({
      type: 'GET_MOVIE DATA',
      payload: response
    });
  }
}

export const toggleNavbar = () => {
  return {
    type: 'TOGGLE_NAVBAR',
    payload: {
      active: true
    }
  }
}
