import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class NorthAmerica extends Component {

    northAmerica = {
        'north america': {
            'Theatrical': {
                'Gross': this.props.finance['theatrical']['gross'].toFixed(2),
                'Film Rental': this.props.finance['theatrical']['film rental'].toFixed(2),
                'Distribution Fee': this.props.finance['theatrical']['distribution fee'].toFixed(2),
                'Direct Distribution Expenses': this.props.finance['theatrical']['direct distribution expenses'].toFixed(2),
                'Distributor\'s Net': this.props.finance['theatrical']['distributor\'s net'].toFixed(2)
            },
            'Home Entertainment': {
                'Gross': this.props.finance['home entertainment']['gross'].toFixed(2),
                'Expenses': this.props.finance['home entertainment']['expenses'].toFixed(2),
                'Distribution Fee': this.props.finance['home entertainment']['distribution fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['home entertainment']['distributor\'s net'].toFixed(2)
            },
            'Theatrical and Home': {
                'Sales Agent Fee': this.props.finance['theatrical and home']['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['theatrical and home']['distributor\'s net'].toFixed(2)
            },
            'Pay Per View': {
                'Gross': this.props.finance['pay per view']['gross'].toFixed(2),
                'Distribution Fee': this.props.finance['pay per view']['distribution fee'].toFixed(2),
                'Direct Distribution Expenses': this.props.finance['pay per view']['direct distribution expenses'].toFixed(2),
                'Sales Agent Fee': this.props.finance['pay per view']['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['pay per view']['distributor\'s net'].toFixed(2)
            },
            'Premium Cable': {
                'Gross': this.props.finance['premium cable']['gross'].toFixed(2),
                'Distribution Fee': this.props.finance['premium cable']['distribution fee'].toFixed(2),
                'Direct Distribution Expenses': this.props.finance['premium cable']['direct distribution expenses'].toFixed(2),
                'Sales Agent Fee': this.props.finance['premium cable']['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['premium cable']['distributor\'s net'].toFixed(2)
            },
            'Free TV Premiere': {
                'Gross': this.props.finance['free tv premiere']['gross'].toFixed(2),
                'Distribution Fee': this.props.finance['free tv premiere']['distribution fee'].toFixed(2),
                'Direct Distribution Expenses': this.props.finance['free tv premiere']['direct distribution expenses'].toFixed(2),
                'Sales Agent Fee': this.props.finance['free tv premiere']['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['free tv premiere']['distributor\'s net'].toFixed(2)
            },
            'Cable & Syndicated TV': {
                'Gross': this.props.finance['cable and syndicated tv']['gross'].toFixed(2),
                'Distribution Fee': this.props.finance['cable and syndicated tv']['distribution fee'].toFixed(2),
                'Direct Distribution Expenses': this.props.finance['cable and syndicated tv']['direct distribution expenses'].toFixed(2),
                'Sales Agent Fee': this.props.finance['cable and syndicated tv']['sales agent fee'].toFixed(2),
                'Distributor\'s Net': this.props.finance['cable and syndicated tv']['distributor\'s net'].toFixed(2)
            },
            'Total Net Earnings':{
            'Total Net Earnings': this.props.finance['total net earnings'].toFixed(2)}
        }
    }

    buildTableRows = (northAmericaElement) => {
        const generateInfo = this.generateInfo(northAmericaElement);
        return (
            <div className='card financial-card' key={northAmericaElement}>
                <h5 className='financial-header'>{northAmericaElement}</h5>
                <div className='financial-body'>
                    {generateInfo}
                </div>
            </div>     
       )	
    }
    itemInfo(item, amount){
        return (
            <p key={item}>{item}:<br/> ${amount}</p>
        )
    }
    generateInfo = (item) =>{
        const itemInfo = this.northAmerica['north america'][item]
        let infoArray = [];
        for(let element in itemInfo){        
            infoArray.push( this.itemInfo(element, itemInfo[element]))
        }
        return infoArray;
    }

    componentDidMount(){
        this.props.getFinancialData();
    }

    render(){
        const infoArray = [];
       for(let element in this.northAmerica['north america']){
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
    finance: state.finance.financeList[0]['north america']
  }
}

export default connect(mapStateToProps, {
  getFinancialData
})(NorthAmerica);