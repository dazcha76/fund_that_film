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
      <h1 className='title'>Fund My Film</h1> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to='/new_project'>
          <button className='page-button start-project-button'>Start</button>
        </Link>
      </div>


    </div>
  )
}