import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NorthAmerica from './northAmerica';
import International from './international';
import Global from './global';
import Other from './other';
import Chart from '../charts.js/main';
import { getFinancialData, getMovieData, sendToken } from '../../actions';
import InternationalGraphs from '../charts.js/international';
import NorthAmericaHorizontal from './../charts.js/northamerica';
import Disclaimer from '../footer/disclaimer';
import Preloader from '../preloader/index';
import Nav from '../navbar/index';
import { connect } from 'react-redux';

class FinancialNorthAmerica extends Component {
  state = {
    toShareable: false,
  }

  getSharables = () => {
    this.props.sendToken('f1f3aabffb332762c3c9c0cd87f9e280380d0a8b')
    .then(() => this.setState(() => ({
        toShareable: true
      })));
  }

  render(){

    if (this.state.toShareable === true) {
      return <Redirect target='_blank' to={'/invest'} />
    }

    return (
     
      <div>
         <Preloader/>
         <Nav/>
         <button onClick={this.getSharables} className="share_button">Share</button>
        <div id="financials-background-container">
          <div id="financials-background"></div>
          <div id="financials-background-filter"></div>
        </div>
        <div id="financial-container">
          <h1 className='financial-charts-header'>Financial Calculations</h1>
            <Tabs defaultActiveKey='northAmerica'>
              <Tab eventKey='northAmerica' title='North America' className='tab'>
                <div className='northAmerican-graph-container'>
                  <h1 className='chart-header'>Production Gross in Millions</h1>
                  <NorthAmericaHorizontal/>
                </div>
                <NorthAmerica/>
              </Tab>
              <Tab eventKey='international' title='International'>
                <div className='international-graphs-container'>
                    <h1 className='chart-header'>International Gross Earnings</h1>
                  <InternationalGraphs/>
                </div>
                <div className='international-tab-wrapper'>
                   <International/>
                </div>
              </Tab>
              <Tab eventKey='global' title='Global'>
                <Global/>
              </Tab>
              <Tab eventKey='other' title='Other'>
              <div className='other-northAmerican-graph-container'>
                  <h1 className='chart-header'>Distributors To Cost Ratio</h1>
                <Chart/>
                <Other/>
              </div>
              </Tab>
            </Tabs>
        </div>
        <Disclaimer/>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movieList,
    finance: state.finance.financeList
  }
}

export default connect(mapStateToProps, {
    getFinancialData, getMovieData, sendToken
})(FinancialNorthAmerica);