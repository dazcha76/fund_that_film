import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFinancialData, getMovieData, signIn, showModal, scrollable } from '../../actions';
import Register from '../newuser/register';
import Nav from '../navbar/index';
import Disclaimer from '../footer/disclaimer';
import Preloader from '../preloader/index';

class MovieComparison extends Component {
  // state = {
  //   scrollable: 'no-scroll'
  // }

  componentWillMount(){
    if(localStorage.getItem('logged-in')){
      // this.setState({
      //   scrollable: 'yes-scroll'
      // })
      this.props.scrollable('yes-scroll')
    }
  }
  
  async componentDidMount(){
    if(!localStorage.getItem('logged-in')){
      const { title1, title2 } = this.props.comparables;
      await this.props.getMovieData(title1, title2);
    }
  }
  
  handleConfirm = () => {
    this.props.getFinancialData(this.props.movies[0].id, this.props.movies[1].id);
    if(!localStorage.getItem('logged-in')){
      this.props.showModal(true);
      this.props.scrollable('no-scroll');
    }

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
    const { movies, session, modal, scroll } = this.props;
    // const canScroll = this.state.scrollable;

    if(!movies){
      return <Preloader/>
    }

    return (

      <div className={'main-container comparables-container ' + scroll }>
        {!localStorage.getItem('logged-in') && modal && <Register />}
        <Nav/>
        <h1 className='details-title'>Movie Comparisons</h1>
        <div className='movie-info-container'>
          { this.renderMovies() }
        </div>  
        <div className='button-container comparables-buttons'>
          <Link to='/details'>
            <button className="input-submit-button page-button">More Details</button>
          </Link>
          <Link to='/financials'>
            <button onClick={this.handleConfirm} className="page-button">Confirm</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comparables: state.comparables,
    movies: state.movies.movieList,
    session: state.session,
    modal: state.modal.showModal,
    scroll: state.scrollable.scrollable
  }
} 

export default connect(mapStateToProps, {
  getMovieData, 
  getFinancialData, 
  signIn,
  showModal,
  scrollable
})(MovieComparison);