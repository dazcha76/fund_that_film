import React, { Component } from 'react';
import Chart from 'chart.js';

class InternationalGraphs extends Component{
    async componentDidMount(){
        Chart.defaults.global.defaultFontColor = '#37EFBA';
        Chart.defaults.global.defaultFontSize = '20';
        Chart.defaults.global.defaultFontFamily = 'San-Serif';
        let ctx =document.getElementById('graphChart');
        let graphChart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels:['Theatrical', 'Home', 'TV'],
                datasets:[{
                    label: 'International Gross Earnings',
                    data: [182, 182,182],
                    borderColor: '#8e5ea2',
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 99, 132, 0.2)"
                      ],
                      borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                        "rgba(255,99,132,1)"
                      ],
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                animation: {
                  easing: 'easeInCirc',
                  duration:4000
                },
                legend:{ 
                    display : false,
                    title:{
                        text: 'International Gross Earnings'
                    },
                    labels:{
                        fontColor:'#35f8c7',
                        padding: 3,
                        fontStyle:'normal'
                    }
                },
                title:{
                    display:false,
                    padding:5,
                    fontColor:'#35f8c7',
                    fontFamily: 'sans-serif'
                }
            }
        })
    }
    render(){
        return  <canvas id='graphChart' width='200' height ='50'></canvas>;
    }
}

export default InternationalGraphs;