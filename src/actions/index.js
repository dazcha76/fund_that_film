import types from './types';

export const getMovieData = movie => {
  return {
    type: 'GET_MOVIE DATA',
    payload: movie
  }
}