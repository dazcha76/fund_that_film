import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { sendToken } from '../../actions';

class InternationalGraphs extends Component{
    componentDidUpdate(){
        Chart.defaults.global.defaultFontColor = '#37EFBA';
        Chart.defaults.global.defaultFontSize = '20';
        Chart.defaults.global.defaultFontFamily = 'San-Serif';
        Chart.defaults.global.hover.mode = 'nearest';

        let ctx =document.getElementById('internationalChart');
        let internationalChart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels:['Theatrical', 'Home', 'TV'],
                datasets:[{
                    label: 'International Gross Earnings',
                    data: [
                        this.props.finance['theatrical, home, tv gross'],
                        this.props.finance['sales agent fee'],
                        this.props.finance['total net earnings']
                    ],
                    borderColor: '#8e5ea2',
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)"
                      ],
                      borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)"
                      ],
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                animation: {
                  easing: 'easeInCirc',
                  duration:2000
                },
                legend:{ 
                    display : false,
                    labels:{
                        fontColor:'#35f8c7',
                        padding: 3,
                        fontStyle:'normal'
                    }
                },
                title:{
                    display:true,
                    padding:5,
                    fontColor:'#35f8c7',
                    fontFamily: 'sans-serif'
                }
            }
        })
    }

    render(){
        return  <canvas id='internationalChart' width='200' height ='50'></canvas>;
    }
}

const mapStateToProps = state => {
    return {
        finance: state.token.shareableList[0]['international']
    }
}

export default connect(mapStateToProps, {
    sendToken
})(InternationalGraphs);