import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

class Other extends Component {
    other = {
         'other': {  
             'Other': {
            'Total Distributor Net': 270622152,
            'Global Brand Tie-in Fees': 0,
            'Production Financing Expense': 4050000,
            'Negative Cost':45000000,
            'Studio Burden': 0,
            'Talent residuals': 6386569,
            'Sales Agent Direct Sales Expenses': 500000,
            'Producers Gross': 214685583,
            'Talent Participation': 15027991,
            'Producer Net': 199657592,
            'Studio Share': 0,
            'Producer Share': 199657592,
            'Distributor Net Earning To Cost Ratio': '4.8:1',
            'expenses after distributor net': 70964560
        }
    }
}
buildTableRows =( other ) => {
    const generateInfo = this.generateInfo(other);
    return(
        <div className='card' key={ other }>
        <h5 className='card-header'>{ other }</h5>
        <div className='card-body'>
            <h5 className='card-title'>Information:</h5>
            { generateInfo }
        </div>
    </div>
  )
}
otherInfo( item, amount ){
    return (
        <p key = { item }><strong>{ item }:</strong>{ amount }</p>
    )
}
generateInfo = ( item ) => {
    const otherInfo = this.other['other'][item]
    let infoArray = [];
    for(let element in otherInfo){
        infoArray.push( this.otherInfo(element, otherInfo[ element ]))
    }
    console.log(otherInfo);
    return infoArray;
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

export default Other;