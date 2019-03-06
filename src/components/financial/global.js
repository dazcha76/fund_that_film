import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';

class Global extends Component {
    global ={
        'global': {
            'global consumer products': {
                'royalties gross': 3841280,
                'merchandising distribution fee': 0,
                'sales agent fee': 576192,
                'distributor net': 3265088
            }
        }
    }
    buildTableRows = (global) => {
        const generateInfo = this.generateInfo(global);
        return(
            <div className='card' key={global}>
            <h5 className='card-header'>{global}</h5>
            <div className='card-body'>
                <h5 className='card-title'>Info</h5>
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
        const globalInfo = this.global['global'][item]
        let infoArray = [];
        for(let element in globalInfo){
            infoArray.push( this.globalInfo(element, globalInfo[ element ]))
        }
        return infoArray;
    }
    render(){
        const infoArray =  [];
        for(let element in this.global['global']){
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