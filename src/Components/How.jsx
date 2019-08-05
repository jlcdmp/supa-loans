import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap'
import '../CSS/How.css'

class How extends Component {
  state = {}

  render() {
    return (
      <div className='how'>

        <div className='how-content'>

          <div class='how-store'>
            <Card >
              <Card.Img variant="top" src={require('/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/clipboard2.png')} />
              <Card.Body>
                <Card.Title>1</Card.Title>
                <Card.Text>Select Credit Score, Reason for Loan and Monthly Income.</Card.Text>
              </Card.Body>
            </Card>






          </div>

          <h3>Representative Examples of Costs & APR</h3>

          <div className='how-table'>
            <Table borderless={true}>
              <thead>
                <tr>
                  <th>Loan Amount</th>
                  <th>Interest Rate</th>
                  <th>Loan Term</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$1,000</td>
                  <td>24.00%</td>
                  <td>12 Months</td>
                  <td>3.00%</td>
                </tr>
                <tr>
                  <td>$2,000</td>
                  <td>19.00%</td>
                  <td>24 Months</td>
                  <td>5.00%</td>
                </tr>
              </tbody>
            </Table>


            <Table borderless={true} >
              <thead>
                <tr>
                  <th>Monthly Payment</th>
                  <th>APR</th>
                  <th>Total Payment</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$94.56</td>
                  <td>29.82%</td>
                  <td>$1134.72</td>
                  <td>$164.72</td>
                </tr>
                <tr>
                  <td>$100.82</td>
                  <td>24.12%</td>
                  <td>$2,419.68</td>
                  <td>$519.68</td>
                </tr>
              </tbody>



            </Table>


          </div>



          <div className='how-terms'>

            <p> <strong>For example:</strong> the $2,000 representative loan above with a 24-month term and a 5% origination fee, would have a total cost, including the 5% origination fee ($100) plus interest, of $519.68 and a total payback amount of $2,419.68. All fees associated with any loan are required to be disclosed by the lender in terms of APR.</p>
            <p>Qualified consumers who are approved by a lender will receive loan offers with the below range of loan terms and maximum APR</p>
          </div>








        </div>
      </div >
    );
  }
}

export default How;