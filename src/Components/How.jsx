import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import '../CSS/How.css'
import Fade from 'react-reveal/Fade'

class How extends Component {
  state = {}

  render() {
    return (
      <div className='how' id='how'>
        <div className='how-content'>
          <h2 className='page-title' >How It Works</h2>
          <h3>Supa Easy 4 Step Process</h3>
          <div class='how-store' onScroll={console.log('scollin')}>
            <Fade duration={1700}>
              <div className='steps-card' id='c1' >
                <img className='step-img' src={require("../images/cursor.png")} />
                <p className='card-body-p'  > <strong>1. </strong>Select Your Credit Score, Reason for Loan and Monthly Income.</p>
              </div>
            </Fade>
            <Fade duration={1700} delay={850} >
              <div className='steps-card' id='c2'>
                <img className='step-img' src={require("../images/clipboard-fill.png")} />
                <p className='card-body-p'> <strong>2. </strong>Complete a short form, All information is encrypted once submitted.</p>
              </div>
            </Fade>
            <Fade duration={1700} delay={1700}>
              <div className='steps-card' id='c3' >
                <img className='step-img' src={require("../images/clipboard.png")} />
                <p className='card-body-p' > <strong>3. </strong>Once your information is processed  we search the internet for a succsesfull loan.</p>
              </div>
            </Fade>
            <Fade duration={1700} delay={2550} >
              <div className='steps-card' id='c4' >
                <img className='step-img' src={require("../images/handshake.png")} />
                <p className='card-body-p' > <strong>4. </strong> If  accepted by a lender  we will redirect you to their website to complete the process.</p>
              </div>
            </Fade>
          </div>
          <p>Please review all the loan documents carefully and make sure you understand the terms of the loan being offered. If you do not agree with those terms, simply decline the loan without any penalty. If you agree to the terms, simply follow the instructions provided by the lender. It's that easy!</p>
          <h3 className='sub-title'>Representative Examples of Costs & APR</h3>
          <div className='how-table'>
            <Table borderless={false}>
              <thead>
                <tr>
                  <th class='text-center' >Loan Amount</th>
                  <th class='text-center' >Interest Rate</th>
                  <th class='text-center' >Loan Term</th>
                  <th class='text-center' >Fee</th>
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
            <Table borderless={false} >
              <thead>
                <tr>
                  <th class='text-center' >Monthly Payment</th>
                  <th class='text-center' >APR</th>
                  <th class='text-center' >Total Payment</th>
                  <th class='text-center' >Total Cost</th>
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
            <p> <strong>For example:</strong> The $2,000 representative loan above with a 24-month term and a 5% origination fee, would have a total cost, including the 5% origination fee ($100) plus interest, of $519.68 and a total payback amount of $2,419.68. All fees associated with any loan are required to be disclosed by the lender in terms of APR.</p>
          </div>
        </div>
      </div >
    );
  }
}

export default How;