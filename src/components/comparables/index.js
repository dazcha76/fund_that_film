import comparables from '../../section/comparables.scss';
import animation from '../../section/animation.scss';
import React, { Component } from 'react';
import lakehouse from '../../assets/images/lakehouse.png';
import spiderman from '../../assets/images/spiderman.png';
import DetailsPage  from './details';
import { connect } from 'react-redux';
import { getMovieData } from '../../actions';
import {Link} from 'react-router-dom';

class MovieComparison extends Component {
  toggleClass = () => {
    const currentState = this.props.movies[0].active;
    this.setState({active : !currentState});
  } 

  componentDidMount(){
    this.props.getMovieData();
  }

  renderMovies(){
    return this.props.movies.map( movie => {
      return (
        <div key = {movie.movieTitle} className='movies'>
          <div className='comparison-movie-display'>
            <img src= { movie.image } id='movie-1-img' className='movie-display'/>
            <div className='movie-title-wrapper'>
              <h3 className='movie-title-subheader'>{ movie.movieTitle } </h3>
              <h3 className='movie-subheader'>Release Date: { new Date(movie.releaseDate).toLocaleDateString('en-US', {day : 'numeric', month : 'long', year : 'numeric'})}</h3>
              <h3 className='movie-subheader'>Total Box Office: ${ (movie.usBoxOffice + movie.intlBoxOffice).toLocaleString() }</h3>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    const arrowActive = 'is-active';

    return (
      <div className='comparables-main'>
        <div className='comparables-wrapper'>
          <div className='comparables-container'>
            <div className='header'>
              <h1> Movie Comparisons</h1>
            </div>
            <div className='movie-info-container'>
              { this.renderMovies() }
            </div>  
            <div onClick = { this.toggleClass } id='arrow-icon'>
              <i className='fas fa-angle-down'></i>
            </div>
          </div> 
        </div>
        <div>
          <DetailsPage detailPageOnclick = {this.active} toggleDetailPage = {() => { this.toggleClass()}}/>
        </div>
        <Link to='/financials'>
            <button className="input-submit-button first-button page-button">Confirm</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, {
  getMovieData
})(MovieComparison);

