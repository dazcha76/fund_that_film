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
                title: 'Spiderman',
                genre: 'romantic',
                theatrical_release: '2018',
                budget: '934,000',
                distribution: 'ABC',
                mpaa: 'r-rated',
                funding_partners : 'Funding Partners',
                audience_satisfaction : 'Great',
                initial_gross: '$323,433',
                us_gross: '33,234'
            },
            {  
                id:2000,
                image:lakehouse,
                title: 'Spiderman',
                genre: 'romantic',
                theatrical_release: '2018',
                budget: '934,000',
                distribution: 'ABC',
                mpaa: 'r-rated',
                funding_partners : 'Funding Partners',
                audience_satisfaction : 'Great',
                initial_gross: '$323,433',
                us_gross: '33,234'
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
                                <div className='comparison-details'>
                                        <h2 id='genre' className='movie-modal-info'>{ movieDetails.genre }</h2>
                                </div>
                            </div>
                        </div>
                        <div className='movie-detail'>
                                <div className='movie-details-wrapper'>
                            <div className='comparison-details'>
                                    <h2 id='budget' className='movie-modal-info'>{ movieDetails.budget }</h2>
                                </div>
                        <div className='comparison-details'>
                                <h2 id='mpaa' className='movie-modal-info'>{ movieDetails.mpaa }</h2>
                        </div>
                        <div className='comparison-details'>
                                <h2 id='us-theatrical' className='movie-modal-info'>{ movieDetails.theatrical_release}</h2>
                            </div>
                            <div className='comparison-details'>
                                    <h2 id='audience-satisfaction' className='movie-modal-info'>{ movieDetails.audience_satisfaction }</h2>
                                </div>
                            </div>
                            <div className='movie-details-wrapper'>
                                <div className='comparison-details'>
                                        <h2 id='funding-partner' className='movie-modal-info'>{ movieDetails.funding_partners }</h2>
                                    </div>
                                    <div className='comparison-details'>
                                            <h2 id='initial-gross' className='movie-modal-info'>{ movieDetails.us_gross }</h2>
                                        </div>
                                        <div className='comparison-details'>
                                                <h2 id='distribution' className='movie-modal-info'>{ movieDetails.distribution }</h2>
                                            </div>
                                            <div className='comparison-details'>
                                                    <h2 id='us-gross' className='movie-modal-info'>{ movieDetails.us_gross }</h2>
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