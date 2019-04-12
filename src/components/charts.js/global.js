import React, { Component } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class GlobalGraphs extends Component{
    componentDidUpdate(){
        let ctx =document.getElementById('globalChart');
        let globalChart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels:['Royalties Gross', 'Sales Agent Fee', "Distributor's Net"],
                datasets:[{
                    label: 'Global Consumer Products',
                    data: [
                        this.props.finance['royalties gross']/1000000,
                        this.props.finance['sales agent fee']/1000000,
                        this.props.finance["distributor's net"]/1000000
                    ],
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
        return  <canvas id='globalChart' width='200' height ='50'></canvas>;
    }
}

const mapStateToProps = state => {
    return {
        finance: state.finance.financeList[0]['global consumer products']
    }
}

export default connect(mapStateToProps, {
    getFinancialData
})(GlobalGraphs);