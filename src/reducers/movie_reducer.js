import types from '../actions/types';
// import lakehouse from '../../assets/images/lakehouse.png';

const DEFAULT_STATE = [
  {
    active: false,
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tHpc1118dYWLnHZleGhwZxRbpae.jpg',
    movieTitle: 'The Lake House',
    releaseDate: '2006-06-19',
    usBoxOffice: 52330111,
    intlBoxOffice: 62500000
  },
  {
    active: false,
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/eA2D86Y6VPWuUzZyatiLBwpTilQ.jpg',
    movieTitle: 'The Amazing Spider-Man',
    releaseDate: '2012-07-03',
    usBoxOffice: 262030663,
    intlBoxOffice: 495859604
  }
];

const movieReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    default:
      return state
  }
};

export default movieReducer;