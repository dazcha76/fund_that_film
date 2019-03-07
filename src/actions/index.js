import comparablesApi from '../apis/comparables.js'
import financialApi from '../apis/financial.js'

export const getMovieData = () => {
  return async dispatch => {
    const response = await comparablesApi.post();
    console.log(response)
    dispatch({
      type: 'GET_MOVIE_DATA',
      payload: response
    });
  }
}

export const getFinancialData = () => {
  return async dispatch => {
    const response = await financialApi.get();

    dispatch({
      type: 'GET_FINANCIAL_DATA',
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
