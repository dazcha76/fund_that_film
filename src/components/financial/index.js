import React, { Component } from 'react';
import scss from '../../section/financial.scss';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';
import Button from 'react-bootstrap/Button';
import NorthAmerica from './northAmerica';
import International from './international';
import Global from './global';
import Other from './other';

import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class FinancialNorthAmerica extends Component {

  componentDidMount(){
    this.props.getFinancialData();
    console.log("CALCS PROPS:", this.props.finance[0]["distributor's net earning to cost ratio"])
  }

  render(){
  	const showActive ='show active';
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
          <Tab eventKey='global' title='Global' info={this.props.finance}>
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

const mapStateToProps = state => {
  return {
    finance: state.finance.financeList
  }
}

export default connect(mapStateToProps, {
  getFinancialData
})(FinancialNorthAmerica);