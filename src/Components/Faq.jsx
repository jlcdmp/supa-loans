import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import '../CSS/Faq.css'

class Faq extends Component {
  state = {}

  render() {
    return (
      <div className='faq'>
        <h2 className='page-title' >Frequently Asked Questions</h2>



        <div>

          <h4>What Is A Perosnal Loan?</h4>
          <p>A personal loan is a fixed term loan that can be used for a variety of purposes such as home improvements or vehicle repairs. The terms vary from 1-5 years. Simply complete some information about yourself and get an answer while you wait! If selected by a lender, they will provide you with detailed loan documents including APR and repayment terms. It’s that simple! </p>
        </div>

        <div className='faq-container'>

          <div>

            <h4>What are some of the requirements for a Personal Loan?
</h4>
            <ol>
              <li>Being 18 years or older</li>
              <li>A U.S citizen</li>
              <li>Seeking $1,000 or more</li>
              <li>A steady job or other source of regular income</li>
              <li>A bank account preferably with Direct Deposit. </li>
            </ol>
          </div>


          <div>


            <h3>What Can I Use A Personal Loan For?</h3>
            <ol>
              <li>Unexpected Emergencys</li>
              <li>Medical Bills</li>
              <li>Vehicle Repairs</li>
              <li>Debt Consolidation</li>
              <li>business Loans</li>
              <li>Home Improvments</li>
            </ol>
          </div>



        </div>






        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">Is Supa Loans A Lender?</Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>We take your personal loan request and work with our nationwide network of trusted lenders to present you with a lender willing to lend to you. There is no cost for using our service.</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              What Is Supa Loans?
      </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Supa Loans is a loan connecting service which attempts to connect your application details with a lender willing to lend to you. This service is FREE to the customer applying. DollarLoanz may receive a commission from the lender for introducing the customer to the lender.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              What Is A Personal Loan?
      </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>A personal loan is a fixed term loan that can be used for a variety of purposes such as home improvements or vehicle repairs. The terms vary from 1-5 years.</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
              What Are The Fee's?
      </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>There are no fees to apply at Supa Loans. Simply complete some information about yourself using the online application and get an answer while you wait! The only cost you are responsible for comes after you review and agree to a lender’s terms, by signing a loan contract. Fees associated with the loan will vary depending on your state, the lender, and the amount of your personal loan.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              How Will I know If Im Approved?
      </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Within a few minutes, you will receive a notification from a Supa Loans approved lender letting you know if you’re approved! If you are presented with a loan offer, you will have the option to review the terms of the loan, which you may approve or declined.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              What Happens If I Miss A Payment?
      </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Lenders in the Supa Loans network follow different policies regarding late payments. Most lenders apply a late fee for missing the loan payment deadline or asking to skip a payment. You should review and understand the late payment policy specified in the lender’s loan documents before accepting the loan terms and signing the loan agreement.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              How Is My Information Protected?      </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>Your privacy and security are of the utmost importance to SupaLoans.com! Our site offers encryption technology that allows you to use SupaLoans.com with confidence. See our privacy policy for further details about our security.</Card.Body>
            </Accordion.Collapse>
          </Card>





        </Accordion>






      </div>
    );
  }
}

export default Faq;