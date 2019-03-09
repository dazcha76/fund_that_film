import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../section/external/charts.scss';
import Bar from './bar';
// import Ctest from './canvastest';


class Chart extends Component{
    async componentDidMount(){
        //const resp = await axios.get('/api/stat's);
    }
    // <Bar/>
    render(){
        return(
            <div className='graphContainer'>
                    <div className="bar-chart-display">
                        <h1>Distributors Earnings to Cost Ratio</h1>
                       <Bar/>
                    </div>
                  
            </div>
        )
    }
}

export default Chart;