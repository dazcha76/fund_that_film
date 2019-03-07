 import React, { Component } from 'react';
 import { Tabs, Tab } from 'react-bootstrap';
import financial from '../../section/financial.scss';
import tablenames from './tablenames';
import Button from 'react-bootstrap/Button';
import NorthAmerica from './northAmerica';
import International from './international';
import Global from './global';
import Other from './other';

class FinancialNorthAmerica extends Component{
	state = {
		isNorthAmerica : true,
		isInternational : false,
		isGlobal : false,
		isOther  : false,
	}
	clearActiveTab = () => {
		this.setState({
			'isNorthAmerica': false,
			'isInternational': false,
			'isGlobal': false,
			'isOther': false
		});
		
	}
	onNorthAmericaSelected = () => {
		this.clearActiveTab();
		this.setState({'isNorthAmerica': true});
		
	}
	onInternationalSelected = () => {
		this.clearActiveTab();
		this.setState({'isInternational': true});
	}
	onGlobal = () => {
		this.clearActiveTab();
		this.setState({'isGlobal': true});
	}
	onOther = () => {
		this.clearActiveTab();
		this.setState({'isOther': true});
	}

    render(){
	
		const showActive =' show active';
		const baseClass = 'tab-pane fade';
        return (
			<div>
				<br/>
				<br/>
				<br/>
				<Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
					<Tab eventKey='northAmerica' title='NorthAmerica'>
							<NorthAmerica />
					</Tab>
					<Tab eventKey='international' title='International'>
							<International/>
					</Tab>
					<Tab eventKey='global' title='global'>
							<Global/>
					</Tab>
					<Tab eventKey='other' title='other'>
							<Other/>
					</Tab>
				</Tabs>;
			</div>
        )
    }
}

export default FinancialNorthAmerica;



























