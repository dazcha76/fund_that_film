import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class NorthAmericaGraphs extends Component {
  componentDidUpdate() {
    Chart.defaults.global.defaultFontColor = '#37EFBA';
    Chart.defaults.global.defaultFontSize = '20';
    Chart.defaults.global.tooltips = false;
    Chart.defaults.global.defaultFontFamily = 'San-Serif';
    let ctx = document.getElementById('northAmericaChart');
    let northAmericaChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Theatrical',
          'Home Entertaining',
          'Pay Per View',
          'Premium Cable',
          'Free TV Premiere',
          'Cable & Syndicated TV',
          'Total Net Earnings'
        ],
        datasets: [
          {
            label: 'Production Gross in Millions',
            data: [
              this.props.finance['theatrical']['gross'],
              this.props.finance['home entertainment']['gross'],
              this.props.finance['pay per view']['gross'],
              this.props.finance['premium cable']['gross'],
              this.props.finance['free tv premiere']['gross'],
              this.props.finance['cable and syndicated tv']['gross'],
              this.props.finance['total net earnings']
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 1
          }
        ]
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
    });
  }
  render() {
    return <canvas id='northAmericaChart' width='200' height='50' />;
  }
}

const mapStateToProps = state => {
    return {
        finance: state.finance.financeList[0]['north america']
    }
}

export default connect(mapStateToProps, {
    getFinancialData
})(NorthAmericaGraphs);
