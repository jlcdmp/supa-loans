import React, { Component } from 'react';
import { Button } from 'react-bootstrap'


class What extends Component {
  state = {}

  render() {
    return (

      <div>

        <div className='what-container'>


          <h4>What Is A Perosnal Loan?</h4>


          <p>A personal loan is a fixed term type of loan. They are <u>NOT</u> secured agasint any asssest such as a house, they are also refered to as unsecured loans.</p>

          <p>
            They can be used for a variety of purposes and the terms vary from 1-5 years. Simply complete some information about yourself and get an answer while you wait! </p>

          <p>
            If selected by a lender, they will provide you with detailed loan documents including APR and repayment terms. It’s that simple! </p>
        </div>

        <div className='reqs-use'>

          <div className='faq-container' id='reqs'>
            <h4>What are some of the requirements?</h4>
            <ol>
              <li>You are at least 18 years older</li>
              <li>A U.S citizen</li>
              <li>Seeking at least $1,000</li>
              <li>Regular income</li>
              <li>A direct deposit bank account</li>
            </ol>
          </div>



          <div className='faq-container' id='use'>
            <h4>What Can I Use A Personal Loan For?</h4>
            <div className='faq-card-container'>

              <div className='faq-card' id='fc1'>
                <img src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/medical.png")} />
                <p>Medical Bills</p>
              </div>

              <div className='faq-card' id='fc2'>
                <img src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/danger.png")} />
                <p>Unexpected Emergencies</p>
              </div>

              <div className='faq-card' id='fc3' >
                <img src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/tools.png")} />
                <p>Home Improvments</p>
              </div>

              <div className='faq-card' id='fc4' >
                <img src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/car.png")} />
                <p>Vehicle Repairs</p>
              </div>

              <div className='faq-card' id='fc5' >
                <img src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/chart.png")} />
                <p>Busniess Loans</p>
              </div>

              <div className='faq-card' id='fc6' >
                <img src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/credit.png")} />
                <p>Debt Consolidation</p>
              </div>

            </div>
          </div>
        </div>


        <a href='/apply' className='btn btn-primary'>Ready To Apply?</a>

      </div>
    );
  }
}

export default What;