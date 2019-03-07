import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class Other extends Component {
    other = {
         'other': {  
            'Other': {
            'Total Distributor\'s Net': this.props.finance['total distributor\'s net'].toFixed(2),
            'Global Brand Tie-in Fees': this.props.finance['global brand tie-in fees'].toFixed(2),
            'Production Financing Expense': this.props.finance['production financing expense'].toFixed(2),
            'Negative Cost': this.props.finance['negative cost'].toFixed(2),
            'Studio Burden': this.props.finance['studio burden'].toFixed(2),
            'Talent Residuals': this.props.finance['talent residuals'].toFixed(2),
            'Sales Agent Direct Sales Expenses': this.props.finance['sales agent direct sales expenses'].toFixed(2),
            'Producer\'s Gross': this.props.finance['producer\'s gross'].toFixed(2),
            'Talent Participation': this.props.finance['talent participation'].toFixed(2),
            'Producer\'s Net': this.props.finance['producer\'s net'].toFixed(2),
            'Studio\'s Share': this.props.finance['studio\'s share'].toFixed(2),
            'Producer\'s Share': this.props.finance['producer\'s share'].toFixed(2),
            'Distributor\'s Net Earning To Cost Ratio': this.props.finance['distributor\'s net earning to cost ratio'],
            'Expenses After Distributor\'s Net': this.props.finance['expenses after distributor\'s net'].toFixed(2)
        }
    }
}
buildTableRows =( other ) => {
    const generateInfo = this.generateInfo(other);
    return(
        <div className='card financial-card' key={ other }>
        <h5 className='financial-header'>{ other }</h5>
        <div className='financial-body'>
            { generateInfo }
        </div>
    </div>
  )
}
otherInfo( item, amount ){
    return (

        <p key = { item }>{ item }:<br/>${ amount }</p>

    )
}
generateInfo = ( item ) => {
    const otherInfo = this.other['other'][item]
    let infoArray = [];
    for(let element in otherInfo){
        infoArray.push( this.otherInfo(element, otherInfo[ element ]))
    }
    return infoArray;
}

    componentDidMount(){
        this.props.getFinancialData();
    }

    render(){
        const infoArray = [];
        for( let element in this.other['other']){
            infoArray.push( this.buildTableRows( element ))
        }
        return(
             <div className='card-financial-global-wrapper'>
                {infoArray}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    finance: state.finance.financeList[0]
  }
}

export default connect(mapStateToProps, {
  getFinancialData
})(Other);