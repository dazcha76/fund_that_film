import React, { Component } from 'react';
import Chart from 'chart.js';

class NorthAmericaHorizontal extends Component {
  async componentDidMount() {
    Chart.defaults.global.defaultFontColor = '#37EFBA';
    Chart.defaults.global.defaultFontSize = '20';
    Chart.defaults.global.tooltips = false;
    Chart.defaults.global.defaultFontFamily = 'San-Serif';
    let ctx = document.getElementById('horizontalChart');
    let myChart = new Chart(ctx, {
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
            data: [94, 177, 5, 0.942, 7, 4.7, 121],
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
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 20
              }
            }
          ]
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgb(255, 99, 132)',
            fillColor: '#35f8c7',
            fontFamily: 'sans-serif'
          }
        }
      }
    });
  }
  render() {
    return <canvas id='horizontalChart' width='200' height='50' />;
  }
}
export default NorthAmericaHorizontal;
