import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

class Global extends Component {
    global ={
        'Global': {
            'Global Consumer Products': {
                'Royalties Gross': 3841280,
                'Merchandising Distribution Fee': 0,
                'Sales Agent Fee': 576192,
                'Distributor Net': 3265088
            }
        }
    }
    buildTableRows = (global) => {
        const generateInfo = this.generateInfo(global);
        return(
            <div className='card' key={global}>
            <h5 className='card-header'>{global}</h5>
            <div className='card-body'>
                <h5 className='card-title'>Information:</h5>
                {generateInfo}
            </div>
        </div>
      )
    }
    globalInfo(item, amount){
        return (
            <p key = {item}><strong>{ item }:</strong>{ amount }</p>
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

export default Global;