import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InternationalGraphs from './graphs';
import Bar from './bar';

import NorthAmericaHorizontal from './northamerica';


class Chart extends Component{
    async componentDidMount(){
        //const resp = await axios.get('/api/stat's);
    }
    render(){
        return(
            <div className="graphContainer">
                <h1>Financial Analytics</h1>
                    <InternationalGraphs/>
                    <Bar/>
                    <NorthAmericaHorizontal/>
                  
            </div>
        )
    }
}

export default Chart;