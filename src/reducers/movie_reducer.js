const DEFAULT_STATE = {
  movieList: [
    {
      id: 1,
      title:'Wonder Woman',
      us_theatrical_release: '',
      us_gross_bo:0,
      intl_gross_bo:0,
      distribution_companies_info:[
          {
              id: 0,
              name: ''
          }
      ],
      budget:0,
      mpaa_rating:'',
      audience_satisfaction:0,
      funding_partners_info:[
          {
              id: 0,
              name: ''
          }
      ],
      us_theatrical_end:'',
      genre:'',
      year:'',
      image_url:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg'
    },
    {
      id: 2,
      title:'The Smurfs',
      us_theatrical_release: '',
      us_gross_bo:0,
      intl_gross_bo:0,
      distribution_companies_info:[
          {
              id:0,
              name:''
          }
      ],
      budget:0,
      mpaa_rating:'',
      audience_satisfaction:0,
      funding_partners_info:[
          {
              id:0,
              name: ''
          },
          {
              id:0,
              name: ''
          }
      ],
      us_theatrical_end:'',
      genre:'',
      year: '' ,
      image_url:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ntP7anZWyi7TxFARKp78bHTLEVr.jpg'  
    }
  ]
};

const movieReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'GET_MOVIE_DATA':
      return {movieList: action.payload.data.data}
    default:
      return state
  }
};

export default movieReducer; 