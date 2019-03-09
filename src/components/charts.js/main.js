import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Bar from './bar';
// import App from './canvastest';


class Chart extends Component{
    async componentDidMount(){
        //const resp = await axios.get('/api/stat's);
    }
    render(){
        return(
            <div className='graphContainer'>
                <h1>Financial Analytics</h1>
                    {/* <App/> */}
                    <Bar/>
            </div>
        )
    }
}

export default Chart;