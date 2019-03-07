import React from 'react';
import comparables from '../../section/home.scss';
import {Link} from 'react-router-dom';

export default props => {

  return (
    <div>
      <h1 className="title">Fund That Film</h1>  

      <Link to='/new_project'>
        <button className="page-button start-project-button">Start</button>
      </Link>
    </div>
  )
}