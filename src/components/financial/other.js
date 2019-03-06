import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

class Other extends Component {
    other = {
         'Other': {  
             'Other': {
            'total distributor net': 270622152,
            'global brand tie-in fees': 0,
            'production financing expense': 4050000,
            'negative cost':45000000,
            'studio burden': 0,
            'talent residuals': 6386569,
            'sales agent direct sales expenses': 500000,
            'producers gross': 214685583,
            'talent participation': 15027991,
            'producer net': 199657592,
            'studio share': 0,
            'producer share': 199657592,
            'distributor net earning to cost ratio': '4.8:1',
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
            <h5 className='card-title'>Info</h5>
            { generateInfo }
        </div>
    </div>
  )
}
otherInfo( item, amount ){
    return (
        <p key = {item}><strong>{ item }:</strong>{ amount }</p>
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