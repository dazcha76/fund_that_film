import React, { Component } from 'react';
import scss from '../../section/financial.scss';
import { connect } from 'react-redux';
import { getFinancialData } from '../../actions';

class Financials extends Component {

    componentDidMount(){
        this.props.getFinancialData();
      }

    render(){
        return (
            <div className="calculations-wrapper hidden">
            <div className="calculations-container">
                <h1>Producer's Global Income Share Analysis for The Greatest Movie</h1>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">North America</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col1 left">Theatrical Gross Box Office</td>
                            <td>$79,870,000</td>
                        </tr>
                        <tr>
                            <td>Film Rental (at 50%)</td>
                            <td>$39,935,000</td>
                        </tr>
                        <tr>
                            <td>Studio Distribution Fee (at 25% of Film Rental)</td>
                            <td>$9,983,750</td>
                        </tr>
                        <tr>
                            <td>Direct Distribution Expense</td>
                            <td>$55,000,000</td>
                        </tr>
                        <tr>
                            <td className="total left">Theatrical Distributor’s Net</td>
                            <td className="total">($25,048.750)</td>
                        </tr>
                        <tr>
                            <td className="left">Home Entertainment Rental/Sales/Streaming/Download Gross Income</td>
                            <td>$150,155,600</td>
                        </tr>
                        <tr>
                            <td> Home Entertainment  Advertising, Sreaming, Dup & Dist Expenses</td>
                            <td>$10,292,557</td>
                        </tr>
                        <tr>
                            <td>Total Home Entertainment Distribution Fees at 25%</td>
                            <td>$34,965,761</td>
                        </tr>
                        <tr>
                            <td className="total left">Home Entertainment Distributor's Net</td>
                            <td className="total">$104,897,282</td>
                        </tr>
                        <tr>
                            <td className="left">Pay Per View Gross</td>
                            <td>$4,392,850</td>
                        </tr>
                        <tr>
                            <td>Pay Per View Distribution Fee</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Direct Distribution Expenses</td>
                            <td>$150,000</td>
                        </tr>
                        <tr>
                            <td>Sales Agent Fee (at 15%)</td>
                            <td>$658,928</td>
                        </tr>
                        <tr>
                            <td className="total left">Pay Per View Distributor’s Net</td>
                            <td className="total">$3,583,923</td>
                        </tr>
                        <tr>
                            <td className="left">Premium Cable Gross</td>
                            <td>$6,360,000</td>
                        </tr>
                        <tr>
                            <td>Premium Cable Distribution Fee</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Direct Distribution Expenses</td>
                            <td>$150,000</td>
                        </tr>
                        <tr>
                            <td>Sales Agent Fee (at 15%)</td>
                            <td>$931,500</td>
                        </tr>
                        <tr>
                            <td className="total left">Premium Cable Distributor's Net</td>
                            <td className="total">$5,278,500</td>
                        </tr>
                        <tr>
                            <td className="left">Free Television Premiere Gross</td>
                            <td>$4,770,000</td>
                        </tr>
                        <tr>
                            <td>Network Distribution Fee</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Direct Distribution Expenses</td>
                            <td>$200,000</td>
                        </tr>
                        <tr>
                            <td>Sales Agent Fee (at 15%)</td>
                            <td>$685,500</td>
                        </tr>
                        <tr>
                            <td className="total left">Free Television Pemiere Distributor's Net</td>
                            <td className="total">$3,884,500</td>
                        </tr>
                        <tr>
                            <td className="left">Cable and Syndicated Television</td>
                            <td>$3,180,000</td>
                        </tr>
                        <tr>
                            <td>Cable and Syndicated TV Distribution Fee </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Direct Distribution Expenses</td>
                            <td>$200,000</td>
                        </tr>
                        <tr>
                            <td>Sales Agent Fee (at 5%)</td>
                            <td>$149,000</td>
                        </tr>
                        <tr>
                            <td className="total left">Cable and Syndicated Television Distributor's Net</td>
                            <td className="total">$2,831,000</td>
                        </tr>
                        <tr>
                            <td className="total left">TOTAL NET NORTH AMERICAN EARNINGS</td>
                            <td className="total">$64,141,999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    finance: state.finance
  }
}

export default connect(mapStateToProps, {
  getFinancialData
})(Financials);

