import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import '../../section/financial.scss';
import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class International extends Component {

    componentDidMount(){
        this.props.getFinancialData();
    }

    render(){

        return <h1>Temp</h1>;


        
        return (
            <div className='card-financial-global-wrapper'>
                <div className='card financial-card'>
                    <h5 className='financial-header'>International</h5>
                    <div className="financial-body">
                        <p>Theatrical, Home, TV Gross:<br/> ${this.props.finance['theatrical, home, tv gross'].toLocaleString()}</p>
                        <p>Sales Agent Fee:<br/> ${this.props.finance['sales agent fee'].toLocaleString()}</p>
                        <p>Total Net Earnings:<br/> ${this.props.finance['total net earnings'].toLocaleString()}</p>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
  return {
    finance: state.finance.financeList[0]['international']
  }
}

export default connect(mapStateToProps, {
    getFinancialData
})(International);