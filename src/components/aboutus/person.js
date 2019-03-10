import React from 'react';

export default props => {
    return (

        <div className='card'>
           <img src={ props.image } className='card-img-top profile-img' alt=''/>
           <div className='card-body'>
                <div className='profile-info'>
                    <div className='profile-name'>
                        <h4 className='card-title'>{ props.name }</h4>
                        <h5 className='card-title'>{ props.title }</h5>
                    </div>
                </div>
               <div className='social-icon-container'>
                     <a href={ props.github } target='_blank'><i className='fab fa-github-square'></i></a>
                     <a href={ props.linkedin } target='_blank'><i className='fab fa-linkedin'></i></a>
                     <a href={ props.portfolio } target='_blank'><i className='fas fa-globe'></i></a>
               </div>          
          </div>
     </div>
     
    )
} 