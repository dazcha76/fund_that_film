import comparablesApi from '../apis/comparables.js';
import financialApi from '../apis/financial.js';
import axios from 'axios';

export const sendProjectData = (values) => {
  const { title, runtime, logline, releasedYear, genre, mpaa, developmentStage, synopsis, film1, film2 } = values;

  return async dispatch => {
    const response = await axios.post('/api/addproject.php', {
      newProject: {
        title, runtime, logline, releasedYear, genre, mpaa, developmentStage, synopsis, film1, film2
      } 
    });

    dispatch({
      type: 'SEND_PROJECT_DATA',
      payload: response
    });
  }
}

export const getMovieData = (film1, film2) => {
  return async dispatch => {
    const response = await axios.post('/api/comparables.php', {
      params: {
        title1: film1,
        title2: film2
      }
    });

    console.log('ACTION RESPONSE:', response)

    dispatch({
      type: 'GET_MOVIE_DATA',
      payload: response
    });
  }
}

export const getFinancialData = () => {
  console.log("You are in the Actions file in the getFinancialData function");
  return async dispatch => {
    const response = await financialApi.get();

    dispatch({
      type: 'GET_FINANCIAL_DATA',
      payload: response
    });
  }
}