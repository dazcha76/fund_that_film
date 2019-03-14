
import React, { Component } from 'react';
import DetailsPage  from './details';
import { connect } from 'react-redux';
import { getMovieData } from '../../actions';
import Disclaimer from '../footer/disclaimer';
import {Link} from 'react-router-dom';

class MovieComparison extends Component {
  state = {
    active: false,
    pageHasLoaded:false
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({active : !currentState});
  } 

  componentDidMount(){
    this.props.getMovieData();
     setTimeout(()=>{
      this.setState({ pageHasLoaded: true })
    },1000)
  }

  renderMovies(){
    const { movies } = this.props;

    if(!movies[0]['title']){
        return <h1>Loading Data</h1>;
    }
  
    
    return this.props.movies.map( (movie, index) => {
      let inactiveClass = "";
      if(!this.state.pageHasLoaded){
        if(index === 0){
          inactiveClass = "movie-image inactive-left";
        } else {
          inactiveClass = "movie-image inactive-right";
        }
      }
      else{
        inactiveClass = 'movie-image';
      }

      return (
        <div key = {movie.title} className='movies'>
          <div className='comparison-movie-display'>
            <img src= { movie.image_url } id='movie-1-img' className={ inactiveClass }/>
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
    console.log("Comparables Index Props:", this.props);

    const { movies } = this.props;

    if(!movies[0]['title']){
        return <h1>Loading Data</h1>;
    }

    return (
      <div>
        <div className='comparables-wrapper'>
          <div className="comparables-filter"></div>
          <div className='comparables-container'>
            <h1> Movie Comparisons</h1>
            <div className='movie-info-container'>
              { this.renderMovies() }
            </div>  
            <div className='button-container'>
              <div onClick = {this.toggleClass} id='arrow-icon' className='button-btn'>
                <button className="input-submit-button page-button">More Details</button>
              </div>
              <div className='button-btn'>
                <Link to='/financials'>
                  <button className="input-submit-button page-button">Confirm</button>
                </Link>
              </div>
            </div>
          </div> 
        </div>
        <DetailsPage detailPageOnclick={this.state.active} toggleDetailPage={() => { this.toggleClass()}} />
        <Disclaimer/>
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