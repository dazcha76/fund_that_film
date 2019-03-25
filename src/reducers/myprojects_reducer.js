const DEFAULT_STATE = {
  my_projects: [
    {'id':'1',
     'title':'The Greatest Movie',
     'year':'2019',
     'logline':'In class no one can hear you scream',
     'synopsis':'Student try to finalize a student project as well as juggling the demands of a portfolio and trying to find a job.',
     'production_stage':'Development',
     'genre':'Horror',
     'runtime':'130',
     'mpaa_rating':'PG-13'
    }
  ]
};

const myProjectsReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'GET_MY_PROJECTS':
      return {my_project: action.data}
    default:
      return state
  }
};

export default projectReducer; 
