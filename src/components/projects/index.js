import React, { Component } from 'react';
import Nav from '../navbar/index';
import '../../section/projects.scss'; 

class Projects extends Component {
  render(){
    return (
      <div className='my-projects-wrapper'>
        <Nav />
        <h1>My Projects</h1>
      </div>
    )
  }
}

export default Projects;
