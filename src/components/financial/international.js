import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';


class International extends Component {
    international = {
        'International':{
            'International': {
                'Theatrical, Home, TV Gross': 182350000,
                'sales agent fee': 36470000,
                'Total Net Earnings': 145880000
            },
        }
    }
    buildTableRows = (international) => {
        const generateInternationalInfo = this.generateInfo(international);
        return(
            <div className='card' key={international}>
            <h5 className='card-header'>{international}</h5>
            <div className='card-body'>
                <h5 className='card-title'>Information:</h5>
                {generateInternationalInfo}
            </div>
        </div>
      )
    }
    internationalInfo(item,amount){
        return(
          <p key = {item}><strong>{ item }:</strong>{ amount }</p>
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
    render(){
        const infoArray = [];
        for(let element in this.international['International']){
            infoArray.push( this.buildTableRows(element))
        }
        return (
            <div className='card-financial-wrapper'>
                {infoArray}
            </div>
        )
    }
}
export default International;