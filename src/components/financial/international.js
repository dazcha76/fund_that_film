import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class International extends Component {
    international = {
        'International':{
            'International': {
                'Theatrical, Home, TV Gross': this.props.finance['theatrical, home, tv gross'].toFixed(2),
                'Sales Agent Fee': this.props.finance['sales agent fee'].toFixed(2),
                'Total Net Earnings': this.props.finance['total net earnings'].toFixed(2)
            },
        }
    }
    buildTableRows = (international) => {
        const generateInternationalInfo = this.generateInfo(international);
        return(
            <div className='card financial-card' key={international}>
            <h5 className='financial-header'>{international}</h5>
            <div className='financial-body'>
                {generateInternationalInfo}
            </div>
        </div>
      )
    }
    internationalInfo(item,amount){
        return(
          <p key = {item}>{ item }:<br/> ${ amount }</p>
        )
    }
    generateInfo = (item) => {
        const internationalInfo = this.international['International'][item]
        let infoArray = [];
        for(let element in internationalInfo){
            infoArray.push( this.internationalInfo( element, internationalInfo[ element]))
        }
        return infoArray;
    }

    componentDidMount(){
        this.props.getFinancialData();
    }

    render(){
        const infoArray = [];
        for(let element in this.international['International']){
            infoArray.push( this.buildTableRows(element))
        }
        return (
            <div className='card-financial-global-wrapper'>
                {infoArray}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    finance: state.finance.financeList[0].international
  }
}

export default connect(mapStateToProps, {
  getFinancialData
})(International);