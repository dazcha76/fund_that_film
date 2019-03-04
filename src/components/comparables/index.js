import comparables from '../../section/comparables.scss';
import React, { Component } from 'react';
import lakehouse from '../../assets/images/lakehouse.png';
import spiderman from '../../assets/images/spiderman.png';


class MovieComparison extends Component {
    state = {
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
    
    buildMovieInfo = (movie) => {
        return (
            <div className='movies'>
                <div className='comparison-movie-display'>
                    <img src= { lakehouse } id='movie-1-img' className='movie-display'/>
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
        return (
            <div className='comparables-wrapper hidden'>
                <div className='comparables-container'>
                    <div className='header'>
                        <h3 className= 'movie-subtitle'> Movie Comparisons </h3>
                        { movieInfo }
                        </div>
                </div>
            </div>
        )
   }
}

export default MovieComparison;