import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class Other extends Component {

    componentDidMount(){
        this.props.getFinancialData();
    }

    render(){
        return(
             <div className='card-financial-global-wrapper'>
                <div className='card financial-card'>
                    <h5 className='financial-header'>Global Consumer Products</h5>
                    <div className="financial-body">
                        <p>Total Distributor's Net:<br/> ${this.props.finance['total distributor\'s net'].toLocaleString()}</p>
                        <p>Global Brand Tie-in Fees:<br/> ${this.props.finance['global brand tie-in fees'].toLocaleString()}</p>
                        <p>Production Financing Expense:<br/> ${this.props.finance['production financing expense'].toLocaleString()}</p>
                        <p>Negative Cost:<br/> ${this.props.finance['negative cost'].toLocaleString()}</p>
                        <p>Studio Burden:<br/> ${this.props.finance['studio burden'].toLocaleString()}</p>
                        <p>Talent Residuals:<br/> ${this.props.finance['talent residuals'].toLocaleString()}</p>
                        <p>Sales Agent Direct Sales Expenses:<br/> ${this.props.finance['sales agent direct sales expenses'].toLocaleString()}</p>
                        <p>Producer's Gross:<br/> ${this.props.finance['producer\'s gross'].toLocaleString()}</p>
                        <p>Talent Participation:<br/> ${this.props.finance['talent participation'].toLocaleString()}</p>
                        <p>Producer's Net:<br/> ${this.props.finance['producer\'s net'].toLocaleString()}</p>
                        <p>Studio's Share:<br/> ${this.props.finance['studio\'s share'].toLocaleString()}</p>
                        <p>Producer's Share:<br/> ${this.props.finance['producer\'s share'].toLocaleString()}</p>
                        <p>Distributor's Net Earning To Cost Ratio:<br/> {this.props.finance['distributor\'s net earning to cost ratio']}</p>
                        <p>Expenses After Distributor's Net:<br/> ${this.props.finance['expenses after distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>
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