import React from 'react';
import scss from '../../section/aboutus.scss';

export default props => {
    return (

        <div className='card'>
           <img src={ props.image } className='card-img-top profile-img' alt=''/>
           <div className='card-body'>
                <div className='profile-info'>
                    <div className='profile-name'>
                        <h5 className='card-title'>{ props.name }</h5>
                    </div>
                </div>
               <div className='social-icon-container'>
                     <a href={ props.github } ><i className='fab fa-github-square'></i></a>
                     <a href={ props.linkedin } ><i className='fab fa-linkedin'></i></a>
                     <a href={ props.portfolio } ><i className='fas fa-briefcase'></i></a>
               </div>          
          </div>
     </div>
     
    )
}