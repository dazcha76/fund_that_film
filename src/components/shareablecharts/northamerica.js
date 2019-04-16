import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { sendToken } from '../../actions';

class NorthAmericaGraphs extends Component {
  componentDidUpdate() {
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
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(75, 192, 192, 0.4)',
              'rgba(153, 102, 255, 0.4)',
              'rgba(255, 159, 64, 0.4)',
              'rgba(255, 99, 132, 0.4)'
            ],
            borderColor: [
              'rgb(255,99,132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)',
              'rgb(255,99,132)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
                responsive: true,
                animation: {
                  easing: 'easeInCirc',
                  duration:1000
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
                },
                tooltips: {
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  titleFontSize: 16,
                  titleFontColor: '#000',
                  bodyFontColor: '#000',
                  bodyFontSize: 16
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
        finance: state.token.shareableList[0]['north america']
    }
}

export default connect(mapStateToProps, {
    sendToken
})(NorthAmericaGraphs);
