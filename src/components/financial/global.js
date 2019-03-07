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
                'Royalties Gross': this.props.finance['royalties gross'].toFixed(2),
                'Merchandising Distribution Fee': this.props.finance['merchandising distribution fee'].toFixed(2),
                'Sales Agent Fee': this.props.finance['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['distributor\'s net'].toFixed(2)
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
    finance: state.finance.financeList[0]['global consumer products']
  }
}

export default connect(mapStateToProps, {
  getFinancialData
})(Global);