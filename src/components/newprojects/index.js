import React, { Component } from 'react';
import scss from '../../section/newproject.scss';

class NewProject extends Component {
  render(){
    return (
      <div className="new-project-wrapper">
        <div className="new-project-container">
          <h1>New Project</h1>
          <form className="new-project-form">
            <input type="text"  className="user-project-input" placeholder="Title "required />
            <div className="multiple-inputs">
              <select id="year-input">
                  <option value="year">Release Year</option>
                  <option value="1990">2019</option>
                  <option value="2020-">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
              </select>
              <input type="text"   className="user-project-input"placeholder="Intended Runtime" />
            </div>
            <input type="text"  className="user-project-input" placeholder="LogLine" />
            <input type="text"  className="user-project-input" placeholder="Synopsis" />
            <div className="multiple-inputs">
              <select  id="mpaa-input">
                  <option value="MPAA">MPAA Rating</option>
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                  <option value="PG">PG-13</option>
                  <option value="R">R</option>
                  <option value="NC-17">NC-17</option>
              </select>
              <select id="genre-input">
                  <option value="genre">Genre</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Psychological Thriller">Psychological Thriller</option>
                  <option value="Drama">Drama</option>
                  <option value="Western">Western</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Black Comedy">Black Comedy</option>
                  <option value="Romance">Romance</option>
                  <option value="Romantic Comedy">Romantic Comedy</option>
                  <option value="Horror">Horror</option>
                  <option value="Action">Action</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Adventure Film">Adventure Film</option>
                  <option value="Documentary Film">Documentary Film</option> 
              </select>
            </div>
            <select  id="production-stage-input">
                <option value="Development">Development Stage</option>
                <option value="Pre-production">Pre-production</option>
                <option value="Production">Production</option>
                <option value="Production">Post Production</option>
                <option value="Distribution">Distribution</option>         
            </select>
            <p className="my-project">My project is:</p>
            <div className="multiple-inputs">
                <input type="text" className="user-project-input" placeholder="Film 1" />
                <p className="meets">meets</p>    
                <input type="text" className="user-project-input" placeholder="Film 2" />  
            </div> 
          </form>
          <button className="input-submit-button first-button page-button">Submit</button>
          <button className="input-cancel-button second-button page-button">Cancel</button>
        </div>
      </div>
    )
  }
}

export default NewProject;