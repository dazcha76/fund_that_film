import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFinancialData, getMovieData } from '../../actions';
import Nav from '../navbar/index';
import Disclaimer from '../footer/disclaimer';
import Preloader from '../preloader/index';

class MovieComparison extends Component {
  async componentDidMount(){
    const { title1, title2 } = this.props.comparables;
    await this.props.getMovieData(title1, title2);
  }

  handleConfirm = () => {
    this.props.getFinancialData(this.props.movies[0].id, this.props.movies[1].id);
  }

  renderMovies(){
    const { movies } = this.props;

    return this.props.movies.map(movie => {
      return (
        <div key={movie.id} className='movies'>
          <img src= { movie.image_url } className='movie-image' />
          <h4 className='green'>{ movie.title }</h4>
          <p>
            <span className='green'>Release Date: </span> 
            { new Date(movie.us_theatrical_release).toLocaleDateString('en-US', {day : 'numeric', month : 'long', year : 'numeric'})}
          </p>
          <p>
            <span className='green'>Total Box Office: </span> 
            { parseInt(movie.us_gross_bo) + parseInt(movie.intl_gross_bo) ? '$' + (parseInt(movie.us_gross_bo) + parseInt(movie.intl_gross_bo)).toLocaleString() : 'N/A' }
          </p>
        </div>
      )
    })
  }

  render(){
    const { movies } = this.props;

    if(!movies){
      return <Preloader/>
    }

    return (
      <div className='main-container comparables-container'>
        <Nav/>
        <h1 className='details-title'>Movie Comparisons</h1>
        <div className='movie-info-container'>
          { this.renderMovies() }
        </div>  
        <div className='button-container'>
          <Link to='/details'>
            <button className="input-submit-button page-button">More Details</button>
          </Link>
          <Link to='/financials'>
            <button onClick={this.handleConfirm} className="page-button">Confirm</button>
          </Link>
          <Link to='/register'>
            <button onClick={this.handleConfirm} className="page-button">Register</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comparables: state.comparables,
    movies: state.movies.movieList
  }
} 

export default connect(mapStateToProps, {
  getMovieData, getFinancialData
})(MovieComparison);