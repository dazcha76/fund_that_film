import React from 'react';
import scss from '../../section/financial.scss';

export default props => {
    return (
         <div class="calculations-wrapper hidden">
            <div class="calculations-container">
                <h1>Producer's Global Income Share Analysis for The Greatest Movie</h1>
                <table>
                    <tr>
                        <th colspan="2">North America</th>
                    </tr>
                    <tr>
                        <td class="col1 left">Theatrical Gross Box Office</td>
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
                        <td class="total left">Theatrical Distributor’s Net</td>
                        <td class="total">($25,048.750)</td>
                    </tr>
                    <tr>
                        <td class="left">Home Entertainment Rental/Sales/Streaming/Download Gross Income</td>
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
                        <td class="total left">Home Entertainment Distributor's Net</td>
                        <td class="total">$104,897,282</td>
                    </tr>
                    <tr>
                        <td class="left">Pay Per View Gross</td>
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
                        <td class="total left">Pay Per View Distributor’s Net</td>
                        <td class="total">$3,583,923</td>
                    </tr>
                    <tr>
                        <td class="left">Premium Cable Gross</td>
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
                        <td class="total left">Premium Cable Distributor's Net</td>
                        <td class="total">$5,278,500</td>
                    </tr>
                    <tr>
                        <td class="left">Free Television Premiere Gross</td>
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
                        <td class="total left">Free Television Pemiere Distributor's Net</td>
                        <td class="total">$3,884,500</td>
                    </tr>
                    <tr>
                        <td class="left">Cable and Syndicated Television</td>
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
                        <td class="total left">Cable and Syndicated Television Distributor's Net</td>
                        <td class="total">$2,831,000</td>
                    </tr>
                    <tr>
                        <td class="total left">TOTAL NET NORTH AMERICAN EARNINGS</td>
                        <td class="total">$64,141,999</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}