import React, { Component } from 'react';
import Chart from 'chart.js';

class InternationalGraphs extends Component{
    async componentDidMount(){
        Chart.defaults.global.defaultFontColor = '#35f837';
        Chart.defaults.global.defaultFontSize = '25';
        Chart.defaults.global.defaultFontFamily = 'San-Serif';
        let ctx =document.getElementById('graphChart');
        let graphChart = new Chart (ctx, {
            type: 'pie',
            data: {
                labels:['Theatrical', 'Home', 'TV'],
                datasets:[{
                    label: 'International Gross Earnings',
                    data: [182, 182,182],
                    borderColor: '#8e5ea2',
                    backgroundColor: ['rgba(220, 86, 88, 1)','rgba(58, 163, 228, 1)','rgba(46, 209, 190, 1)'],
                    hoverBorderColor: ['rgba(161, 33, 33, 1)','rgba(9, 18, 206, 1)'],
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                animation: {
                  easing: 'easeInCirc',
                  duration:4000
                },
               
                scales:{
                    yAxes:[{
                        tickets:{
                            beginAtZero:true
                        }
                    }]
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
                    display:true,
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