import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class Global extends Component {

    global = {
        'Global': {
            'Global Consumer Products': {
                'Royalties Gross': this.props.finance[0]['global consumer products']['royalties gross'].toFixed(2),
                'Merchandising Distribution Fee': this.props.finance[0]['global consumer products']['merchandising distribution fee'].toFixed(2),
                'Sales Agent Fee': this.props.finance[0]['global consumer products']['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance[0]['global consumer products']['distributor\'s net'].toFixed(2)
            }
        }
    }

    buildTableRows = (global) => {
        const generateInfo = this.generateInfo(global);
        return(
            <div className='card financial-card' key={global}>
            <h5 className='financial-header'>{global}</h5>
            <div className='financial-body'>
                {generateInfo}
            </div>
        </div>
      )
    }

    globalInfo(item, amount){
        return (
            <p key = {item}> { item }:<br/> ${ amount }</p>
        )
    }

    generateInfo = (item) =>{
        const globalInfo = this.global['Global'][item]
        let infoArray = [];
        for(let element in globalInfo){
            infoArray.push( this.globalInfo(element, globalInfo[ element ]))
        }
        return infoArray;
    }

    componentDidMount(){
    this.props.getFinancialData();
    console.log("GLOBAL PROPS:", this.props.finance[0]["distributor's net earning to cost ratio"])
  }

    render(){
        const infoArray =  [];
        for(let element in this.global['Global']){
            infoArray.push( this.buildTableRows(element))
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
    finance: state.finance.financeList
  }
}

export default connect(mapStateToProps, {
    getFinancialData
})(Global);