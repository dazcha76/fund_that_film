import React, { Component } from 'react';
import Nav from '../navbar/index';
import '../../section/projects.scss'; 
import { connect } from 'react-redux';
import { getMyProjects } from '../../actions';

class Projects extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.setState({ pageHasLoaded: true })
    },1000)
    this.props.getMyProjects();
  }

  render(){
    return (
      <div className='my-projects-wrapper'>
        <Nav />
        <h1>My Projects</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("MY PROJECTS STATE:", state)
  return {
    my_projects: state
  }
}

export default connect(mapStateToProps, {
    getMyProjects
})(Projects);
