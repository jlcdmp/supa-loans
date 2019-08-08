import React, { Component } from 'react';
import { Form, Col, Button, Table, ProgressBar } from 'react-bootstrap'
import '../CSS/Apply.css'

class Apply extends Component {
  state = {

    apply: {
      amount: null,
      title: null,
      firstName: null,
      lastName: null,
      homePhone: null,
      cellPhone: null,
      workPhone: null,
      email: null,
      ssn: null,
      dob: null,
      lisence: null,
      issue: null,
      military: null,
      zip: null,
      nameNumber: null,
      street: null,
      city: null,
      state: null,
      status: null,
      locTime: null,
      source: null,
      empName: null,
      payType: null,
      net$: null,
      empTime: null,
      payFreq: null,
      jobTitle: null,
      bankName: null,
      accNum: null,
      ABA: null,
      accType: null,
      bankTime: null,
      argree: null
    },

    now: 0,
    button: true,
    filled: 0,
  }

  render() {

    console.log()

    return (
      <div className='apply'>

        <Form autocomplete='on' onSubmit={this.handleSubmit}>

          <h2 className='h2-title'>Your Loan Application</h2>


          <div className='amount-container'>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <h3 className='amount'>Loan Amount <strong>${this.state.amount}</strong></h3>
              <input type="range" className="custom-range" id="customRange1" min={1000} max={5000} step={50} name='amount' onChange={this.handleChange} />


            </Form.Group>









          </div>



          <div className='personal-container'>
            <h4>Personal Details</h4>
            <h6>We use these details to confirm that it is you making the application</h6>


            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                <Form.Label>Title</Form.Label>
                <Form.Control onClick={this.handleClick} name='title' onChange={this.handleChange} required as="select" >
                  <option>Mr</option>
                  <option>Miss</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>First Name</Form.Label>
                <Form.Control name='firstName' onChange={this.handleChange} required as="textarea" rows='1' />
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name='lastName' onChange={this.handleChange} required as="textarea" rows="1" />
              </Form.Group>
            </Form.Row>




            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Home Number</Form.Label>
                <Form.Control name='homePhone' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Work Number</Form.Label>
                <Form.Control name='workPhone' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Cell Number</Form.Label>
                <Form.Control name='cellPhone' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' onChange={this.handleChange} required type="email" />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>SSN</Form.Label>
                <Form.Control name='ssn' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Date Of Birth </Form.Label>
                <Form.Control name='dob' placeholder='MM/DD/YYYY' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>License/State ID</Form.Label>
                <Form.Control name='lisence' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                <Form.Label>Issuing State</Form.Label>
                <Form.Control name='issue' onChange={this.handleChange} required as="select" >
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                <Form.Label>Military Service</Form.Label>
                <Form.Control name='military' onChange={this.handleChange} required as="select" >
                  <option>None</option>
                  <option>Verteran</option>
                  <option>Reserves</option>
                  <option>Active Duty</option>
                </Form.Control>
              </Form.Group>

            </Form.Row>



            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Zip Code</Form.Label>
                <Form.Control name='zip' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>House Number</Form.Label>
                <Form.Control name='nameNumber' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Street</Form.Label>
                <Form.Control name='street' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>City</Form.Label>
                <Form.Control name='city' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>State</Form.Label>
                <Form.Control name='state' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Residential Status</Form.Label>
                <Form.Control name='status' onChange={this.handleChange} required as='select' rows='1' >
                  <option>Home Owner</option>
                  <option>Private Tenant</option>
                  <option>Council Tenant</option>
                  <option>Living With Family</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </div>


          <div className='income-container'>
            <h4>Income Detials</h4>
            <h6>Lenders use these details to verify your eligibility</h6>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Income Source</Form.Label>
                <Form.Control name='source' onClick={this.handleClick} onChange={this.handleChange} required as='select' rows='1' >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Temporary </option>
                  <option>Self Employed</option>
                  <option>Benifits</option>
                  <option>Pension</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Employer Name</Form.Label>
                <Form.Control name='empName' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Payment Type</Form.Label>
                <Form.Control name='payType' onChange={this.handleChange} required as='select' rows='1' >
                  <option>Direct Deposit (US)</option>
                  <option>Direct Deposit (Other)</option>
                  <option>Cheque </option>
                  <option>Cash</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Net<strong> Monthly </strong>Income</Form.Label>
                <Form.Control name='net$' onChange={this.handleChange} placeholder='$' required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Time At Employer</Form.Label>
                <Form.Control name='empTime' onChange={this.handleChange} placeholder='YYYY/MM' required as='textarea' rows='1' />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Pay Frequency</Form.Label>
                <Form.Control name='payFreq' onChange={this.handleChange} required as='select' rows='1' >
                  <option>Monthly</option>
                  <option>Bi-Montly</option>
                  <option>Weekly</option>
                  <option>Bi-Weekly</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Job Title</Form.Label>
                <Form.Control name='jobTitle' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>

            </Form.Row>




          </div>

          <div className='bank-container'>
            <h4>Bank Details</h4>
            <h6>Please enter the details of the account you want the funds deposited into. This is secure and cannot be used to withdraw money from your account.</h6>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Bank Name</Form.Label>
                <Form.Control name='bankName' onClick={this.handleClick} onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Account Number</Form.Label>
                <Form.Control name='accNum' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Routing Number</Form.Label>
                <Form.Control name='ABA' onChange={this.handleChange} required as='textarea' rows='1' />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Account Type</Form.Label>
                <Form.Control name='accType' onChange={this.handleChange} required as='select' rows='1' >
                  <option>Checking</option>
                  <option>Savings</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Time At Bank</Form.Label>
                <Form.Control name='bankTime' onChange={this.handleChange} placeholder='MM/YYYY' required as='textarea' rows='1' />
              </Form.Group>

            </Form.Row>


          </div>




          <div className='terms-container'>
            <h4>Terms</h4>
            <h6>Please consent to our Terms & Conditions and Privacy Policy</h6>

            <p>By submitting this online form I confirm that I have read and understood PingYo’s  Terms & Conditions,  Privacy Policy, and E-Consent.</p>
            <br />


            <Form.Group controlId="formBasicChecbox">
              <Form.Check name='agree' onClick={this.handleClick} onChange={this.handleChange} type="checkbox" label="I agree that by submitting this application and clicking Apply Now, I provide my signature expressly consenting to receive recurring communication from PingYo and 3rd Party partners via telephone, text message or email against the number provided on the application.  I am not required to enter into this agreement as a condition for obtaining a loan." />
            </Form.Group>

            <p> I understand that I will receive a maximum of 10 SMS messages per month and that I can text STOP to opt-out anytime.  I understand that I may incur charges from my telephone operator and that message and data rates may apply. No one from this site will call you directly, we will never request upfront payments, we'll never ask you for money, and we will never ask you to purchase vouchers of any kind.</p>

            <p>
              Note: You can opt-out of these communications at any time. For more details please see our Privacy Policy which also explains the types of companies who may contact you and the way they will use the information you have provided today as well as in the past. Be assured that any such parties will use your data in accordance with all applicable law relating to privacy.
             </p>





          </div  >


          <div className='apply-container'>

            <ProgressBar max={100} min={0} now={this.state.now} label={`${this.state.now}%`} />






            <Button disabled={this.state.now >= 100 ? false : true} size='lg' variant="primary" type="submit" onSubmit={this.handleSubmit} >APPLY NOW</Button>

          </div>







        </Form>



        <div className="info-container">

          <p>Please review all the loan documents carefully and make sure you understand the terms of the loan being offered. If you do not agree with those terms, simply decline the loan without any penalty. If you agree to the terms, simply follow the instructions provided by the lender. It's that easy!</p>

          <h4>Representative Examples of Costs & APR</h4>

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









  handleClick = () => {
    this.setState(prevState => ({
      now: prevState.now + 25
    }))
  }



  handleSubmit = () => {
    const application = this.state.apply
  }


  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }

}

export default Apply;