import React, { Component } from 'react';
import '../CSS/Who.css'

class Who extends Component {
  state = {}
  render() {
    return (
      <div className='who'>
        <h2 className='page-title'>Who We Are</h2>
        <div className='who-container'>
          <p>When applying for a loan online you want to be rest assured that you are using a reputibal company.</p>
          <p>It's important to us that you feel comfortable, and uderstand who we are and our process.</p>
          <p>That's why at Supa Loanz we like to keep things simple, so here is a little bit more about us to help put your mind at ease.</p>
          <div className='link-store'>
            <span id='terms-link'>Find more about our T&C's</span>
            <a id='alink' href={'/faq'}>  here.</a>
          </div>
        </div>
        <div className='promise-container'>

          <div className='promise'>
            <img src={require('../images/lock1.png')} />
            <ul>
              <li>All of the data you provide is encrypted and secured.</li>
              <li>We fully comply with data protection laws. </li>
              <li>We are always clear and transparent with regards to how your data will be processed.</li>
            </ul>
          </div>
          <div className='promise'>
            <img src={require("../images/sheild1.png")} />
            <ul>
              <li>We are fully authorised by the FCA as a credit broker #723630.</li>
              <li>We are registered with the Information Commissioner (ICO) #Z3585914.</li>
              <li>We are registered with the Consumer Credit Trade Association (CCTA) #CCTA1200.</li>
            </ul>
          </div>

          <li></li>
        </div>
      </div >
    );
  }
}

export default Who;