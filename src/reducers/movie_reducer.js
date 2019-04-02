const DEFAULT_STATE = {
  movieList: [
    {
      id: null,
      title:'',
      us_theatrical_release: '',
      us_gross_bo:null,
      intl_gross_bo:null,
      distribution_companies_info:[
          {
              id: null,
              name: ''
          }
      ],
      budget:null,
      mpaa_rating:'',
      audience_satisfaction:null,
      funding_partners_info:[
          {
              id: null,
              name: ''
          }
      ],
      us_theatrical_end:'',
      genre:'',
      year:'',
      image_url:''
    },
    {
      id: null,
      title:'',
      us_theatrical_release: '',
      us_gross_bo:null,
      intl_gross_bo:null,
      distribution_companies_info:[
          {
              id:null,
              name:''
          }
      ],
      budget:null,
      mpaa_rating:'',
      audience_satisfaction:null,
      funding_partners_info:[
          {
              id:null,
              name: ''
          },
          {
              id:null,
              name: ''
          }
      ],
      us_theatrical_end:'',
      genre:'',
      year: '' ,
      image_url:''  
    }
  ]
};

const movieReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'GET_MOVIE_DATA':
      return {movieList: action.payload.data}
    default:
      return state
  }
};

export default movieReducer; 