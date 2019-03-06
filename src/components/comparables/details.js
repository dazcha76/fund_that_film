import React, { Component } from 'react';
import moviedetails from '../../section/moviedetails.scss';
import spiderman from '../../assets/images/spiderman.png';
import lakehouse from '../../assets/images/lakehouse.png';

class DetailsPage extends Component {
    state = {
    movieDetails: [
            {
                id:1000,
                image: spiderman,
                title: 'The Amazing Spider-Man',
                genre: 'Adventure',
                theatrical_release: '2012-07-03',
                budget: 220000000,
                distribution: 'Sony Pictures',
                mpaa: 'PG-13',
                funding_partners : 'Columbia Pictures, Marvel Studios',
                audience_satisfaction : 0.77,
                us_gross: 262030663,
                intl_gross: 495859604
            },
            {  
                id:2000,
                image:lakehouse,
                title: 'The Lake House',
                genre: 'Drama',
                theatrical_release: '2006-06-19',
                budget: 40000000,
                distribution: 'Warner Bros.',
                mpaa: 'PG',
                funding_partners : 'Touchstone',
                audience_satisfaction : 0.73,
                us_gross: 52330111,
                intl_gross: 62500000
            },
        ]
    }

    buildMovieDetails = (movieDetails) => {
        return (
            <div key={ movieDetails.id } className='modal-movie-img'>
                <div className='movie-poster'>
                    <img className='movie-img-modal' src= { movieDetails.image } />
                </div>          
                <div className='title-genre-container'>
                    <div className='title-genre-wrapper'>
                        <div className='comparison-details'>
                            <h2 id='title' className='movie-modal-info'>{ movieDetails.title }</h2>
                        </div>
                    </div>
                </div>
                <div className='movie-detail'>
                    <div className='movie-details-wrapper'>
                        <div className='comparison-details'>
                            <h2 id='genre' className='movie-modal-info'>Genre: { movieDetails.genre }</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='budget' className='movie-modal-info'>Budget: ${ movieDetails.budget.toLocaleString() }</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='mpaa' className='movie-modal-info'>Rating: { movieDetails.mpaa }</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='us-theatrical' className='movie-modal-info'>Release Date: { new Date(movieDetails.theatrical_release).toLocaleDateString('en-US', {day : 'numeric', month : 'long', year : 'numeric'})}</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='audience-satisfaction' className='movie-modal-info'>Audience Satisfaction: { movieDetails.audience_satisfaction * 100}%</h2>
                        </div>
                    </div>
                    <div className='movie-details-wrapper'>
                        <div className='comparison-details'>
                            <h2 id='funding-partner' className='movie-modal-info'>Funding Partners: { movieDetails.funding_partners }</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='us-gross' className='movie-modal-info'>U.S. Box Office: ${ movieDetails.us_gross.toLocaleString() }</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='distribution' className='movie-modal-info'>Distribution Comany: { movieDetails.distribution }</h2>
                        </div>
                        <div className='comparison-details'>
                            <h2 id='intl-gross' className='movie-modal-info'>International Box Office: ${ movieDetails.intl_gross.toLocaleString()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        const individualMovieDetails = this.state.movieDetails.map(this.buildMovieDetails);
        const baseClass = "movie1_comparison_modal";
        console.log();
        return (
            <div className={ this.props.detailPageOnclick ? "active " + baseClass : baseClass }   id='movie_1'>
                <h1 onClick = {this.props.toggleDetailPage}>X</h1>
                <div className='modal-content'>
                    { individualMovieDetails }
                </div>
            </div>
        )
    }  
}

export default DetailsPage;