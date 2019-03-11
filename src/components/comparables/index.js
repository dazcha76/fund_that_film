
import React, { Component } from 'react';
import DetailsPage  from './details';
import { connect } from 'react-redux';
import { getMovieData } from '../../actions';
// import Comparables from '../../../dummydata/comparables';

class MovieComparison extends Component {
  state = {
    active: false
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({active : !currentState});
  } 

  componentDidMount(){
    this.props.getMovieData();
  }

  renderMovies(){
      console.log("MovieComparison:", this.props);
    return this.props.movies.map( movie => {
      return (
        <div key = {movie.title} className='movies'>
          <div className='comparison-movie-display'>
            <img src= { movie.image_url } id='movie-1-img' className='movie-image'/>
            <div className='movie-title-wrapper'>
              <h3 className='movie-title-subheader'>{ movie.title } </h3>
              <h3 className='movie-subheader'>Release Date: { new Date(movie.us_theatrical_release).toLocaleDateString('en-US', {day : 'numeric', month : 'long', year : 'numeric'})}</h3>
              <h3 className='movie-subheader'>Total Box Office: ${(parseInt(movie.us_gross_bo) + parseInt(movie.intl_gross_bo)).toLocaleString()}</h3>
            </div>
          </div>
        </div>
      )
    }) 
  }

  render(){
    const arrowActive = 'is-active';

    return (
      <div>
        <div className='comparables-wrapper'>
          <div className='comparables-container'>
            <h1> Movie Comparisons</h1>
            <div className='movie-info-container'>
              { this.renderMovies() }
            </div>  
            <div onClick = { this.toggleClass } id='arrow-icon'>
              <i className='fas fa-angle-down'></i>
            </div>
          </div> 
        </div>
        <DetailsPage detailPageOnclick={this.state.active} toggleDetailPage={() => { this.toggleClass()}} />
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movieList
  }
}

export default connect(mapStateToProps, {
  getMovieData
})(MovieComparison);