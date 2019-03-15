import axios from 'axios';

export const sendProjectData = (values) => {
  const { title, runtime, logline, releasedYear, genre, mpaa, developmentStage, synopsis, film1, film2 } = values;

  return async dispatch => {
    await axios.post('/api/addproject.php', {
      newProject: {
        title, runtime, logline, releasedYear, genre, mpaa, developmentStage, synopsis, film1, film2
      } 
    });

    const compare = {
      title1: film1,
      title2: film2,
    }

    dispatch({
      type: 'STORE_MOVIE_COMPARISONS',
      payload: compare
    });
  }
}

export const getMovieData = (film1, film2) => {
  return async dispatch => {
    const response = await axios.get('/api/comparables.php', {
      params: {
        title1: film1,
        title2: film2
      }
    });

    dispatch({
      type: 'GET_MOVIE_DATA',
      payload: response
    });
  }
}

export const getFinancialData = (id1, id2) => {
  return async dispatch => {
    const response = await axios.get('/api/financial.php', {
      params: {
        id1,
        id2
      }
    });

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

export const sendToken = (token) => {
  return async dispatch => {
    const response = await axios.get('/api/sharable.php', {
      params: {token: token}
    });

    dispatch({
      type: 'SEND_TOKEN',
      payload: response
    });
  }
}