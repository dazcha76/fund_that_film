import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tabs, Tab } from 'react-bootstrap';
import '../../section/financial.scss';
import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class NorthAmerica extends Component {

    componentDidMount(){
        this.props.getFinancialData();
    }

    render(){
        return (
            <div className='card-financial-global-wrapper'>
                <h5 className='financial-header'>North America</h5>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Theatrical</h5>
                    <div className="financial-body">
                        <p>Gross:<br/> ${this.props.finance['theatrical']['gross'].toLocaleString()}</p>
                        <p>Film Rental:<br/> ${this.props.finance['theatrical']['film rental'].toLocaleString()}</p>
                        <p>Distribution Fee:<br/> ${this.props.finance['theatrical']['distribution fee'].toLocaleString()}</p>
                        <p>Direct Distribution Expenses:<br/> ${this.props.finance['theatrical']['direct distribution expenses'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['theatrical']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Home Entertainment</h5>
                    <div className="financial-body">
                        <p>Gross:<br/> ${this.props.finance['home entertainment']['gross'].toLocaleString()}</p>
                        <p>Expenses:<br/> ${this.props.finance['home entertainment']['expenses'].toLocaleString()}</p>
                        <p>Distribution Fee:<br/> ${this.props.finance['home entertainment']['distribution fee'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['home entertainment']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Theatrical and Home</h5>
                    <div className="financial-body">
                        <p>Sales Agent Fee:<br/> ${this.props.finance['theatrical and home']['sales agent fee'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['theatrical and home']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Pay Per View</h5>
                    <div className="financial-body">
                        <p>Gross:<br/> ${this.props.finance['pay per view']['gross'].toLocaleString()}</p>
                        <p>Distribution Fee:<br/> ${this.props.finance['pay per view']['distribution fee'].toLocaleString()}</p>
                        <p>Direct Distribution Expenses:<br/> ${this.props.finance['pay per view']['direct distribution expenses'].toLocaleString()}</p>
                        <p>Sales Agent Fee:<br/> ${this.props.finance['pay per view']['sales agent fee'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['pay per view']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Premium Cable</h5>
                    <div className="financial-body">
                        <p>Gross:<br/> ${this.props.finance['premium cable']['gross'].toLocaleString()}</p>
                        <p>Distribution Fee:<br/> ${this.props.finance['premium cable']['distribution fee'].toLocaleString()}</p>
                        <p>Direct Distribution Expenses:<br/> ${this.props.finance['premium cable']['direct distribution expenses'].toLocaleString()}</p>
                        <p>Sales Agent Fee:<br/> ${this.props.finance['premium cable']['sales agent fee'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['premium cable']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Free TV Premiere</h5>
                    <div className="financial-body">
                        <p>Gross:<br/> ${this.props.finance['free tv premiere']['gross'].toLocaleString()}</p>
                        <p>Distribution Fee:<br/> ${this.props.finance['free tv premiere']['distribution fee'].toLocaleString()}</p>
                        <p>Direct Distribution Expenses:<br/> ${this.props.finance['free tv premiere']['direct distribution expenses'].toLocaleString()}</p>
                        <p>Sales Agent Fee:<br/> ${this.props.finance['free tv premiere']['sales agent fee'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['free tv premiere']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Cable & Syndicated TV</h5>
                    <div className="financial-body">
                        <p>Gross:<br/> ${this.props.finance['cable and syndicated tv']['gross'].toLocaleString()}</p>
                        <p>Distribution Fee:<br/> ${this.props.finance['cable and syndicated tv']['distribution fee'].toLocaleString()}</p>
                        <p>Direct Distribution Expenses:<br/> ${this.props.finance['cable and syndicated tv']['direct distribution expenses'].toLocaleString()}</p>
                        <p>Sales Agent Fee:<br/> ${this.props.finance['cable and syndicated tv']['sales agent fee'].toLocaleString()}</p>
                        <p>Distributor's Net:<br/> ${this.props.finance['cable and syndicated tv']['distributor\'s net'].toLocaleString()}</p>
                    </div>
                </div>

                <div className='card financial-card'>
                    <h5 className='financial-header'>Total Net Earnings</h5>
                    <div className="financial-body">
                        <p>Total Net Earnings:<br/> ${this.props.finance['total net earnings'].toLocaleString()}</p>
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