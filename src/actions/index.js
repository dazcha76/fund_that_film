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

export const getMovieData = () => {
  return async dispatch => {
    const response = await comparablesApi.get();

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

export const sendContactForm = (values) => {
  const { firstName, lastName, phoneNumber, email, message } = values;

  return async dispatch => {
    const response = await axios.post('/api/contact_form.php', {
        firstName, lastName, phoneNumber, email, message
    })

  dispatch({
    type: 'SEND_CONTACT_FORM',
    payload: response
  })
}
}

export const getProjectTitle = (title) => {
  return {
    type: 'GET_PROJECT_TITLE',
    title: title
  }
}