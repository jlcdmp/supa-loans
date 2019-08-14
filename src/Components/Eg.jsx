import React, { Component } from 'react';
import { Table, Tabs, Tab } from 'react-bootstrap'


class Eg extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (


      <div className='examples'>



        <h3 className='sub-title'>Representative Examples</h3>
        <p className='example-sub'>Below is two representative examples, choose between $1,000 or $2,000. For more information visit the FAQ section.</p>

        <Tabs defaultActiveKey='$1,000'>
          <Tab eventKey='$1,000' title='$1,000'>

            <div className='how-table'>
              <Table borderless={true}>
                <thead>
                  <tr>
                    <th>Loan Amount</th>
                    <td>$1000</td>
                  </tr>
                  <tr>
                    <th>Loan Term</th>
                    <td>12 Months</td>
                  </tr>
                  <tr>
                    <th>Interest Rate</th>
                    <td>24.00%</td>
                  </tr>
                  <tr>
                    <th>APR</th>
                    <td>29.82%</td>
                  </tr>
                  <tr>
                    <th>Fee</th>
                    <td>3.00%</td>
                  </tr>
                  <tr>
                    <th>Monthly Pay</th>
                    <td>$94.50</td>
                  </tr>
                  <tr>
                    <th>Total Cost</th>
                    <td>$134.72</td>
                  </tr>
                  <tr>
                    <th>Total Amount Payable</th>
                    <td>$1164.72</td>
                  </tr>
                </thead>
              </Table>

              <div className='explain-container' >
                <h5>This Table Explained</h5>
                <p>If you take out a loan of $1,000 over a 12 month peroid with a 3.00% fee ($30).</p>
                <p>You will pay <u>$94.50</u> every month, totaling at <u>$1,164.72</u>. Which is a cost of <u>$134.72.
                </u></p>
                <p> All fees associated with any loan are disclosed by the lender in terms of APR.</p>

                <p>
                  Qualified consumers who are approved by a lender will receive loan offers with the below range of loan terms and maximum APR</p>
                <p>Minimum of 61 Days, Maximum 84 Months, Maximum APR 35.99%</p>
                <p></p>
              </div>
            </div>


          </Tab>

          <Tab eventKey='$2,000' title='$2,000'>
            <div className='how-table'>
              <Table borderless={true}>
                <thead>
                  <tr>
                    <th>Loan Amount</th>
                    <td>$2,000</td>
                  </tr>
                  <tr>
                    <th>Loan Term</th>
                    <td>24 Months</td>
                  </tr>
                  <tr>
                    <th>Interest Rate</th>
                    <td>19.00%</td>
                  </tr>
                  <tr>
                    <th>APR</th>
                    <td>24.12%</td>
                  </tr>
                  <tr>
                    <th>Fee</th>
                    <td>5.00%</td>
                  </tr>
                  <tr>
                    <th>Monthly Pay</th>
                    <td>$100.82</td>
                  </tr>
                  <tr>
                    <th>Total Cost</th>
                    <td>$519.68</td>
                  </tr>
                  <tr>
                    <th>Total Amount Payable</th>
                    <td>$2419.68</td>
                  </tr>
                </thead>
              </Table>

              <div className='explain-container'>
                <h5>This Table Explained</h5>
                <p>If you take out a loan of $2,000 over a 24 month peroid with a 5.00% fee ($100).</p>
                <p>You will pay <u>$100.82</u> every month, totaling at <u>$2,419.68</u>. Which is a cost of <u>$519.58</u>.</p>
                <p> All fees associated with any loan are disclosed by the lender in terms of APR.</p>
                <p>
                  Qualified consumers who are approved by a lender will receive loan offers with the below range of loan terms and maximum APR</p>
                <p>Minimum of 61 Days, Maximum 84 Months, Maximum APR 35.99%</p>
                <p></p>
              </div>
            </div>          </Tab>

        </Tabs>

























      </div>

    );
  }
}

export default Eg;