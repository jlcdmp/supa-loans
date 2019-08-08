import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import '../CSS/Disc.css'

class Disc extends Component {
  state = {}

  render() {
    return (

      <div className='disc' >
        <h2 className='page-title'>Disclosure Policy</h2>
        <p>The following disclosures are presented to you pursuant to the terms and conditions of our service agreement with GOOGLE, Inc. They are not required by any federal, state or local laws. They are provided to you as informational services only and may not be construed as legal advice. We are not the lender and do not have access to the full terms of your loan.</p>

        <p>
          The loans provided by our referral sources are term loans for 1 to 5 years. These types of loans are not a solution if you are facing long term debt and credit difficulties, and should not be used on a long-term basis. You should only borrow an amount that can be repaid within 1 to 5 years.</p>






        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              APR Disclosure
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>The Annual Percentage Rate is the rate at which your loan accrues interest. It is based upon the amount of your loan, cost of the loan, term of the loan, repayment amounts and timing of payments and payoff. By law, the lender must show you the APR before you enter into any loan agreement. Various States have laws limiting the APR that the lender can charge you. Offers provided to consumers who originated via a paid Google advertisement feature rate quotes 5.99 to 35.99% APR with terms from 90 days to 180 months. Your actual rate depends upon credit score, loan amount, loan term, credit usage and history and will be agreed upon between you and the lender. Be sure to read the disclosures given to you by the lender carefully before you agree to the loan. Please be sure your lender gives you – and you understand - the APR along with the other terms of your loan before you sign their agreement.</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Credit Implications
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Those agencies that we refer to may verify your social security number, driver's license number, national ID, or any other state or federal identification and review your information against national databases to include but not limited to Equifax, Transunion, Experian, Teletrack or DP Bureau to determine credit worthiness, credit standing and/or credit capacity. If they do, please know that this may lower your credit score. Some of our referral sources will not perform credit checks with the three major credit reporting bureaus. Credit checks or consumer reports through alternative providers such as Teletrack or DP Bureau, typically will not affect your credit score. By providing us with your information and seeking a referral, you agree to allow our referral source to verify your information and check your credit as described in their policies and terms.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Renewal Policy
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Each of our referral sources including our direct referral to a lender has their own renewal policy. Some will automatically renew your loans or will require your permission to renew your loan. Some will not renew your loan. It is important for you to understand that extending the repayment period for a loan may result in additional interest, as well as other fees, which can greatly increase the total amount you pay back on a loan. Be sure to check if the lender you accept for the loan automatically renews loans or requires your permission to renew the loan or will not renew. State laws often govern loan renewal policies. Some sources are not governed by state laws. Be sure to know if your lender is governed by state law; and your state’s policies in regard to the loan renewal provisions. Again, carefully read the lender's terms before agreeing to and submitting your e-signature.</Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">Implications Of Late Payments</Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Lenders have their own criteria and policy when it comes to late payments. This may include additional fees and interest and may result in reports to the three major credit reporting bureaus causing your credit score to be lowered. Before you agree to a loan be sure you read and understand the implications of making late payments. Also, each state has rules and regulations in place that lenders must follow when assessing fees for late payments. Be sure to find out if your lender is governed by state law and if not what their policy is regarding late payments.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">Implications Of Non-Payments</Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>If you do not make the payments on your loan you may be responsible for additional fees and interest and collection costs. This may lower your credit score. Lenders are required by Federal and State law to use fair practices in their collection actions for a loan that has not been repaid. You are protected by the Fair Debt Collections Act, which includes limitation on how a lender may collect an unpaid balance including:
                    <ol>
                  <li>Not contacting you by phone before 8 am or after 9 pm.</li>
                  <li>Not harassing you or using abusive language towards you over the phone.</li>
                  <li>Not using deception to try to collect money from you.</li>
                  <li>Not threatening you with legal action if it is not permitted.</li>
                </ol>
                SupaLoans.com is not a lender. Only your lender can provide you with information about your specific loan terms, including the APR, renewal, payments and implications for nonpayment or skipped payments. Example Representative APRs have been provided some but not all of our referral sources, however even these are subject to change and could be higher or lower based on the lenders criteria and your credit worthiness. Please review the loan terms provided by your lender</Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>



        <h6>This website assists consumers in locating a lender. We are not a lender or broker of loans and we do not take loan applications. Instead, we take referral information and make referrals to lenders or networks of lenders. Personal Loan amounts vary from $1,000 to $5,000. Not all lenders can provide up to $5,000.00 and not all referrals are accepted. For those consumers who do not qualify for a Personal Loan, we will refer you to alternative sources. We do not make loans of any type or credit decisions. We are not offering or soliciting you to participate in a loan. This site will refer you to sources including lenders and networks of lenders. Providing your information on this Website does not guarantee that you will be approved for a loan of any type. We are not an agent, representative or broker of any lender and do not endorse or charge you for any loan or related product. Our sources tell us that cash transfer times may vary and may depend on your individual financial institution. In some circumstances faxing may be required. This service is not available in all states. Other than the referral, we have no involvement in your application and loan process. For details, questions or concerns regarding your application or loan, please contact your lender directly. Our referrals are seeking individuals who wish to have short term financing to solve immediate cash needs. Our referrals should not be considered or used as a long term solution. Lenders may or may not perform credit checks with the three credit reporting bureaus: Experian, Equifax, or Trans Union. Lenders may perform alternative credit checks or consumer reports through alternative providers. By submitting your request for a referral, you are authorizing our referral sources including lenders to independently verify the information you submitted and your credit worthiness. This service does not constitute an offer or solicitation for loan products which are prohibited by any state law. This service and offer are void where prohibited.</h6>




      </div >
    );
  }
}

export default Disc;