import React, { Component } from 'react';
import Chart from 'chart.js';



class NorthAmericaHorizontal extends Component{
    async componentDidMount(){
        Chart.defaults.global.defaultFontColor = '#35f837';
        Chart.defaults.global.defaultFontSize = '25';
        Chart.defaults.global.defaultFontFamily = 'San-Serif';
        let ctx = document.getElementById('horizontalChart');
        let myChart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels:['Theatrical', 'Home Entertaining', 'Pay Per View',
                    'Premium Cable', 'Free TV Premiere', 'Cable & Syndicated TV', 'Total Net Earnings'],
                datasets:[{
                    label: 'Production Gross in Millions',
                    data: [94, 177,5,.942,7,4.7, 121],
                    backgroundColor:['#8e5ea2', '#3e95cd','#2ed1b0','#78dae2', '#ef6f6f','#2cf000','#d12e2e'],
                    borderWidth:1
                }],    
            },
            options:{
                animation:{
                    duration:1000
                },  
            scales:{
                xAxes:[{
                    ticks:{
                        beginAtZero:true
                    },     
                }]
            },
            legend:{ 
                display : false,
                title:{
                    text: 'Production Gross & Total Net Earnings'
                },
                labels:{
                    fontColor:'#35f8c7',
                    padding: 2,
                    fontStyle:'normal'
                }
            }
        }
     })
 }
render(){
        return <canvas id='horizontalChart' width='200' height ='50'></canvas>;
     }
}
export default NorthAmericaHorizontal;