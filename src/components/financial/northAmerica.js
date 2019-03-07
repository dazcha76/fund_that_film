import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

class NorthAmerica extends Component {
    northAmerica = {
        'north america': {
            'Theatrical': {
                'Gross': 94200000,
                'Film Rental': 47100000,
                'Distribution Fee': 11775000,
                'Direct Distribution Expenses': 55000000,
                'Distributors Net': -19675000
            },
            'Home Entertainment': {
                'Gross': 177096000,
                'Expenses': 11600962,
                'Distribution Fee': 41373759,
                'Distributors Net': 124121278
            },
            'Theatrical and Home': {
                'Sales Agent Fee': 5222314,
                'Distributors Net': 99223964
            },
            'Pay Per View': {
                'Gross': 5181000,
                'Distribution Fee': 0,
                'Direct Distribution Expenses': 150000,
                'Sales Agent Fee': 777150,
                'Distributor Net': 4253850
            },
            'Premium Cable': {
                'Gross': 9420000,
                'Distribution Fee': 0,
                'Direct Distribution Expenses': 150000,
                'Sales Agent Fee': 1390500,
                'Distributors Net': 7879500
            },
            'Free TV Premiere': {
                'Gross': 7065000,
                'Distribution Fee': 0,
                'Direct Distribution Expenses': 200000,
                'Sales Agent Fee': 1029750,
                'Distributors Net': 5835250
            },
            'Cable & Syndicated TV': {
                'Gross': 4710000,
                'Distribution fee': 0,
                'Direct Distribution Expenses': 200000,
                'Sales Agent Fee': 225500,
                'Distributors Net': 4284500
            },
            'Total Net Earnings':{
            'Total Net Earnings': 121477064}
        }
    }

    buildTableRows = (northAmericaElement) => {
        const generateInfo = this.generateInfo(northAmericaElement);
        return (

            <div className='card' key={northAmericaElement}>
                <h5 className='card-header'>{northAmericaElement}</h5>
                <div className='card-body'>
                    <h5 className='card-title'>Information:</h5>
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