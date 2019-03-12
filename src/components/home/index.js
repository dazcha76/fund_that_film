import React from 'react';
import {Link} from 'react-router-dom';
import landingpage from '../../assets/video/landingpage.mp4';
import example_person_icon from '../../assets/images/example_person_icon.png';

export default props => {

    document.querySelector('#root').click();
    setTimeout(function(){
    document.querySelector('.backgroundVideo').play();
    }, 100);
  
  return (
    <div className='video-container'>
      <video autoPlay='{true}' loop='loop' muted poster={example_person_icon} className='backgroundVideo'>
        <source src={landingpage} type='video/mp4'  />
      </video>
      <div id='video-filter'></div>
      <div id='homepage-content'>
        <h1 className='title'>Fund That Film</h1> 
        <p>Fund that Film enables producers the necessary tools they need in order to present financial data to potential investors and distributors to secure the funding they need to tell compelling stories. We provide a return analysis on the individual projects to be able to position them correctly in the current film market. Let Fund my Film help you tell incredible stories.</p>
          <Link to='/new_project'>
            <button className='page-button start-project-button'>Start</button>
          </Link>
      </div>
    </div>
  )
}