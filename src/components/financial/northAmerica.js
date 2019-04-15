import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';
import Preloader from '../preloader/index';

class NorthAmerica extends Component {
  render(){
    const { finance } = this.props;
    let theatricalGross = 0;
    
    if(!finance['theatrical']['gross']){
        return <Preloader/>;
    }

    return (
      <div>
        <div className='card-financial-global-wrapper northamerica-wrapper'>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Theatrical</h5>
            <div className='financial-body northamerica-body'>
              <p><span className='green'><span className='green'>Gross:</span></span><br/> ${this.props.finance['theatrical']['gross'].toLocaleString()}</p>
              <p><span className='green'>Film Rental:</span><br/> ${this.props.finance['theatrical']['film rental'].toLocaleString()}</p>
              <p><span className='green'>Distribution Fee:</span><br/> ${this.props.finance['theatrical']['distribution fee'].toLocaleString()}</p>
              <p><span className='green'>Direct Distribution Expenses:</span><br/> ${this.props.finance['theatrical']['direct distribution expenses'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['theatrical']["distributor's net"].toLocaleString()}</p>  
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Home Entertainment</h5>
            <div className='financial-body northamerica-body'>
              <p><span className='green'>Gross:</span><br/> ${this.props.finance['home entertainment']['gross'].toLocaleString()}</p>
              <p><span className='green'>Expenses:</span><br/> ${this.props.finance['home entertainment']['expenses'].toLocaleString()}</p>
              <p><span className='green'>Distribution Fee:</span><br/> ${this.props.finance['home entertainment']['distribution fee'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['home entertainment']["distributor's net"].toLocaleString()}</p>
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Theatrical and Home</h5>
            <div className='financial-body northamerica-body tnh'>
              <p className='first-paragraph'><span className='green'>Sales Agent Fee:</span><br/> ${this.props.finance['theatrical and home']['sales agent fee'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['theatrical and home']["distributor's net"].toLocaleString()}</p>
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Pay Per View</h5>
            <div className='financial-body northamerica-body'>
              <p><span className='green'>Gross:</span><br/> ${this.props.finance['pay per view']['gross'].toLocaleString()}</p>
              <p><span className='green'>Distribution Fee:</span><br/> ${this.props.finance['pay per view']['distribution fee'].toLocaleString()}</p>
              <p><span className='green'>Direct Distribution Expenses:</span><br/> ${this.props.finance['pay per view']['direct distribution expenses'].toLocaleString()}</p>
              <p><span className='green'>Sales Agent Fee:</span><br/> ${this.props.finance['pay per view']['sales agent fee'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['pay per view']["distributor's net"].toLocaleString()}</p>
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Premium Cable</h5>
            <div className='financial-body northamerica-body'>
              <p><span className='green'>Gross:</span><br/> ${this.props.finance['premium cable']['gross'].toLocaleString()}</p>
              <p><span className='green'>Distribution Fee:</span><br/> ${this.props.finance['premium cable']['distribution fee'].toLocaleString()}</p>
              <p><span className='green'>Direct Distribution Expenses:</span><br/> ${this.props.finance['premium cable']['direct distribution expenses'].toLocaleString()}</p>
              <p><span className='green'>Sales Agent Fee:</span><br/> ${this.props.finance['premium cable']['sales agent fee'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['premium cable']["distributor's net"].toLocaleString()}</p>
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Free TV Premiere</h5>
            <div className='financial-body northamerica-body'>
              <p><span className='green'>Gross:</span><br/> ${this.props.finance['free tv premiere']['gross'].toLocaleString()}</p>
              <p><span className='green'>Distribution Fee:</span><br/> ${this.props.finance['free tv premiere']['distribution fee'].toLocaleString()}</p>
              <p><span className='green'>Direct Distribution Expenses:</span><br/> ${this.props.finance['free tv premiere']['direct distribution expenses'].toLocaleString()}</p>
              <p><span className='green'>Sales Agent Fee:</span><br/> ${this.props.finance['free tv premiere']['sales agent fee'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['free tv premiere']["distributor's net"].toLocaleString()}</p>
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Cable and Syndicated TV</h5>
            <div className='financial-body northamerica-body'>
              <p><span className='green'>Gross:</span><br/> ${this.props.finance['cable and syndicated tv']['gross'].toLocaleString()}</p>
              <p><span className='green'>Distribution Fee:</span><br/> ${this.props.finance['cable and syndicated tv']['distribution fee'].toLocaleString()}</p>
              <p><span className='green'>Direct Distribution Expenses:</span><br/> ${this.props.finance['cable and syndicated tv']['direct distribution expenses'].toLocaleString()}</p>
              <p><span className='green'>Sales Agent Fee:</span><br/> ${this.props.finance['cable and syndicated tv']['sales agent fee'].toLocaleString()}</p>
              <p><span className='green'>Distributor's Net:</span><br/> ${this.props.finance['cable and syndicated tv']["distributor's net"].toLocaleString()}</p>
            </div>
          </div>
          <div className='card financial-card northamerica-card'>
            <h5 className='financial-header'>Total Net Earnings</h5>
            <div className='financial-body northamerica-body tne'>
              <p><span className='green'>Total Earnings:</span><br/> ${this.props.finance['total net earnings'].toLocaleString()}</p>
            </div>
          </div>
        </div>
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