import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMyProjects, signIn, getFinancialData, getMovieData, getMovieTitles } from '../../actions';
import Nav from '../navbar/index';
import '../../section/projects.scss'; 

class Projects extends Component {
  state = {
    toComparables: false,
    toFinancials: false
  }

  componentDidMount(){
    this.props.getMyProjects();
  }

  seeComparables = (projectId) => {
    this.props.getMovieTitles(this.props.comparables[projectId][0].title, this.props.comparables[projectId][1].title);
    this.setState({toComparables: true})
  }

  seeFinancials = (projectId) => {
    this.props.getFinancialData(this.props.comparables[projectId][0].id, this.props.comparables[projectId][1].id).then(() => {
      this.setState({toFinancials: true})
    })
  }

  buildProject = (project) => {
    return (
      <div key={project.id} className='project-container'>
        <h2 className='project-title'>{project.title}</h2>
        <div className='four-fields'>
          <p><span className='green'>Genre:</span> {project.genre}</p>
          <p><span className='green'>Runtime:</span> {project.runtime}</p>
          <p><span className='green'>MPAA Rating:</span> {project.mpaa_rating}</p>
          <p><span className='green'>Release Year:</span> {project.year}</p>
        </div>
        <div className='two-fields'>
          <p className='production'><span className='green'>Production Stage:</span> {project.production_stage}</p>
          <p className='logline'><span className='green'>Logline:</span> {project.logline}</p>
        </div>
        <p className='synopsis'><span className='green'>Synopsis:</span> {project.synopsis}</p>
        <div className="my-projects-button-container">
          <button className='my-project-comparables-button page-button' onClick={() => {this.seeComparables(project.id)}}>Comparables</button>
          <button className='my-project-financial-button page-button' onClick={() => {this.seeFinancials(project.id)}}>Financials</button>
        </div> 
      </div>
    )
  }

  render(){
    
    if (this.state.toComparables === true) {
      return <Redirect to='/comparisons' />
    } else if (this.state.toFinancials === true){
      return <Redirect to='/financials' />
    }

    const projectCard = this.props.my_projects.map(this.buildProject);

    return (
      <div className='main-container'>
        <Nav />
        <h1 className='my-projects-title'>My Projects</h1>
        {projectCard}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    my_projects: state.myprojects.my_projects,
    comparables: state.session.user.projects
  }
}

export default connect(mapStateToProps, {
    getMyProjects, signIn, getFinancialData, getMovieData, getMovieTitles
})(Projects);
