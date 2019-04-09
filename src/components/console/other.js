import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { sendToken } from '../../actions';

class OtherGraphs extends Component{
    componentDidUpdate(){
        let ratio = (this.props.finance["distributor's net earning to cost ratio"]).split('');
        let cost = ratio[2];
        let earnings = ratio[0]

        Chart.defaults.global.defaultFontColor = 'rgba(255,255,255, 0.9)';
        Chart.defaults.global.defaultFontSize = '20';
        Chart.defaults.global.defaultFontFamily = 'San-Serif';
        Chart.defaults.global.tooltips = false;
        var ctx = document.getElementById('otherChart');
        var otherChart = new Chart (ctx, {
            type: 'horizontalBar',
            data: {
                labels:['Cost', 'Total Earnings'],
                datasets:[
                    {
                        label: 'Distributor Net Earning',
                        data: [cost, earnings],
                        backgroundColor: [  'rgba(255, 99, 132, 0.2)',  'rgba(54, 162, 235, 0.2)'],
                        borderColor:['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
                        borderWidth:1                    
                    }],
            },
            options:{
                animation:{
                    duration:1000,
                },  
                scales:{
                    xAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }],
                    yAxes:[{
                        ticks:{
                            fontSize:20
                        }
                    }],
                },
                legend:{ display :false},
                title:{
                    text: 'Distributor Net Earning To Cost'
                },
                labels:{
                    fontColor:'#rgba(218, 216, 223, 1)',
                    fontSize:20
                }
            }
         }
     )
 } 
    render(){
        return(
            <canvas id='otherChart' width='200' height ='50'></canvas>
        )
    }
}

const mapStateToProps = state => {
    return {
        finance: state.token.shareableList[0]
    }
}

export default connect(mapStateToProps, {
    sendToken
})(OtherGraphs);

