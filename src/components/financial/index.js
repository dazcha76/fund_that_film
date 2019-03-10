import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NorthAmerica from './northAmerica';
import International from './international';
import Global from './global';
import Other from './other';
import Chart from '../charts.js/main';
import { getFinancialData } from '../../actions';
import InternationalGraphs from '../charts.js/international';
import NorthAmericaHorizontal from './../charts.js/northamerica';

class FinancialNorthAmerica extends Component {
  render(){
  	const showActive =' show active';
  	const baseClass = 'tab-pane fade';
    return (
      <div>
        <h1>Financial Calculations for 'The Greatest Movie'</h1>
        <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
          <Tab eventKey='northAmerica' title='North America' className='tab'>
            <NorthAmerica/>
            <div className="northAmerican-graph-container">
              <NorthAmericaHorizontal/>
            </div>
          </Tab>
          <Tab eventKey='international' title='International'>
							<International/>
						<h1>International Gross Earnings</h1>
            <div className='international-graphs-container'>
               <InternationalGraphs/>
            </div>
          </Tab>
          <Tab eventKey='global' title='Global'>
            <Global/>
          </Tab>
          <Tab eventKey='other' title='Other'>
            <Other/>
						<Chart/>
          </Tab>
        </Tabs>;
      </div>
    )
  }
}
 
export default FinancialNorthAmerica;