import React from 'react';
import comparables from '../../section/home.scss';
import {Link} from 'react-router-dom';

export default props => {

  console.log('home props',props)

  return (
    <div id="page-button-container">
      
   

      <Link to='/new_project'>
        <button className="page-button start-project-button">Start</button>
      </Link>
    
    </div>
  )
}