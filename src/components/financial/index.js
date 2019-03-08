import React, { Component } from 'react';
import scss from '../../section/financial.scss';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';
import Button from 'react-bootstrap/Button';
import NorthAmerica from './northAmerica';
import International from './international';
import Global from './global';
import Other from './other';

class FinancialNorthAmerica extends Component {
  render(){
  	const showActive =' show active';
  	const baseClass = 'tab-pane fade';
    return (
      <div>
        <h1>Financial Calculations for 'The Greatest Movie'</h1>
        <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
          <Tab eventKey='northAmerica' title='North America' className="tab">
            <NorthAmerica />
          </Tab>
          <Tab eventKey='international' title='International'>
            <International/>
          </Tab>
          <Tab eventKey='global' title='Global'>
            <Global/>
          </Tab>
          <Tab eventKey='other' title='Other'>
            <Other/>
          </Tab>
        </Tabs>;
      </div>
    )
  }
}

export default FinancialNorthAmerica;