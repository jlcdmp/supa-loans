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
          <div class='how-store' >
            <Fade duration={1000}>
              <div className='steps-card' id='c1' >
                <img className='step-img' src={require("../images/cursor.png")} />
                <p className='card-body-p'  > <strong>1. </strong>Select Your Credit Score, Reason for Loan and Monthly Income.</p>
              </div>
            </Fade>
            <Fade duration={1000} delay={500} >
              <div className='steps-card' id='c2'>
                <img className='step-img' src={require("../images/clipboard-fill.png")} />
                <p className='card-body-p'> <strong>2. </strong>Complete a short form, All information is encrypted once submitted.</p>
              </div>
            </Fade>
            <Fade duration={1000} delay={1000}>
              <div className='steps-card' id='c3' >
                <img className='step-img' src={require("../images/clipboard.png")} />
                <p className='card-body-p' > <strong>3. </strong>Once your information is processed  we search the internet for a succsesfull loan.</p>
              </div>
            </Fade>
            <Fade duration={1000} delay={1500} >
              <div className='steps-card' id='c4' >
                <img className='step-img' src={require("../images/handshake.png")} />
                <p className='card-body-p' > <strong>4. </strong> If  accepted by a lender  we will redirect you to their website to complete the process.</p>
              </div>
            </Fade>
          </div>



        </div>
      </div >
    );
  }
}

export default How;