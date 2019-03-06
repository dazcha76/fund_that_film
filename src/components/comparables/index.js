import comparables from '../../section/comparables.scss';
import animation from '../../section/animation.scss';
import React, { Component } from 'react';
import lakehouse from '../../assets/images/lakehouse.png';
import spiderman from '../../assets/images/spiderman.png';
import DetailsPage  from './details';

class MovieComparison extends Component {
    state = {
        active: false,
        movie: [
            {   
                image: lakehouse,
                title: 'Lakehouse',
                dor: '2017',
                roi: '$1.3 Million'
            },
            {
                image: spiderman,
                title: 'Spiderman',
                dor: '2018',
                roi: '1.5 Million'
            },
        ]
    } 
    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({active : !currentState});
    }
    buildMovieInfo = (movie) => {
        return (
            <div key = {movie.title} className='movies'>
                <div className='comparison-movie-display'>
                    <img src= { movie.image } id='movie-1-img' className='movie-display'/>
                    <div className='movie-title-wrapper'>
                        <h3 className='movie-title-subheader'>{ movie.title } </h3>
                        <h3 className='movie-subheader'>{ movie.dor }</h3>
                        <h3 className='movie-subheader'>{ movie.roi }</h3>
                    </div>
                </div>
            </div>
        ) 
   }

   render(){
        const movieInfo = this.state.movie.map(this.buildMovieInfo);
        const arrowActive = 'is-active';
        return (
            <div>
            <div className='comparables-wrapper '>
                <div className='comparables-container'>
                    <div className='header'>
                        <h3 className= 'movie-subtitle'> Movie Comparisons </h3>
                        </div>
                        <div className='movie-info-container'>
                        { movieInfo }
                        </div>  
                        <div onClick = { this.toggleClass } id='arrow-icon'><i className='fas fa-angle-down'></i></div>
                </div> 
            </div>
            <div>
                <DetailsPage detailPageOnclick = {this.state.active} toggleDetailPage = {() => { this.toggleClass()}}/>
            </div>
    </div>
        )
   }
}

export default MovieComparison;