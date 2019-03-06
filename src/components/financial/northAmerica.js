import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

class NorthAmerica extends Component {
    northAmerica = {
        'north america': {
            'Theatrical': {
                'gross': 94200000,
                'film rental': 47100000,
                'distribution fee': 11775000,
                'direct distribution expenses': 55000000,
                'distributors net': -19675000
            },
            'Home Entertainment': {
                'gross': 177096000,
                'expenses': 11600962,
                'distribution fee': 41373759,
                'distributors net': 124121278
            },
            'Theatrical and Home': {
                'sales agent fee': 5222314,
                'distributors net': 99223964
            },
            'Pay Per View': {
                'gross': 5181000,
                'distribution fee': 0,
                'direct distribution expenses': 150000,
                'sales agent fee': 777150,
                'distributors net': 4253850
            },
            'Premium Cable': {
                'gross': 9420000,
                'distribution fee': 0,
                'direct distribution expenses': 150000,
                'sales agent fee': 1390500,
                'distributors net': 7879500
            },
            'Free TV Premiere': {
                'gross': 7065000,
                'distribution fee': 0,
                'direct distribution expenses': 200000,
                'sales agent fee': 1029750,
                'distributors net': 5835250
            },
            'Cable & Syndicated TV': {
                'gross': 4710000,
                'distribution fee': 0,
                'direct distribution expenses': 200000,
                'sales agent fee': 225500,
                'distributors net': 4284500
            },
            'Total Net Earnings':{
            'total net earnings': 121477064}
        }
    }

    buildTableRows = (northAmericaElement) => {
        const generateInfo = this.generateInfo(northAmericaElement);
        return (

            <div className='card' key={northAmericaElement}>
                <h5 className='card-header'>{northAmericaElement}</h5>
                <div className='card-body'>
                    <h5 className='card-title'>Info</h5>
                    {generateInfo}
                </div>
            </div>


          
       )	
    }
    itemInfo(item, amount){
        return (
            <p key={item}><strong>{item}:</strong> {amount}</p>
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
    render(){
        const infoArray = [];
       for(let element in this.northAmerica['north america']){
           console.log(this.northAmerica['north america'][element])
           infoArray.push( this.buildTableRows(element))
       }
        return (
            <div className='card-financial-wrapper'>
               {infoArray}
            </div>
        )
    }
}

export default NorthAmerica;