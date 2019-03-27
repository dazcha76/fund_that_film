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

  seeComparables = () => {
    console.log('See Comparables')
  }

  seeFinancials = () => {
    console.log('See Financials')
  }

  buildProject(project){
    return (
        <div key={project.id} className='project-container'>
          <h1 className='project-title'>{project.title}</h1>
          <div className='multiple-fields'>
            <p className='project-detail'><span>Genre:</span> {project.genre}</p>
            <p className='project-detail'><span>Runtime:</span> {project.runtime}</p>
            <p className='project-detail'><span>MPAA Rating:</span> {project.mpaa_rating}</p>
            <p className='project-detail'><span>Release Year:</span> {project.year}</p>
          </div>
          <p className='project-detail'><span>Production Stage:</span> {project.production_stage}</p>
          <p className='project-detail'><span>Logline:</span> {project.logline}</p>
          <p className='project-detail'><span>Synopsis:</span> {project.synopsis}</p>
          <div className="my-projects-button-container">
            <button className='my-project-comparables-button page-button'>Comparables</button>
            <button className='my-project-financial-button page-button'>Financials</button>
          </div> 
        </div>
    )
  }

  render(){
    const projectCard = this.props.my_projects.map(this.buildProject);

    return (
      <div className='my-projects-wrapper'>
        <Nav />
        <h1>My Projects</h1>
        {projectCard}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    my_projects: state.myprojects.my_projects
  }
}

export default connect(mapStateToProps, {
    getMyProjects
})(Projects);
