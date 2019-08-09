import React from 'react';
import { Fade, Slide } from 'react-reveal'
import Tada from 'react-reveal/Tada'

import '../CSS/Sucsess.css'


const Sucsess = () => {
  return (

    <div className='sucsess'>

      <div className='sucsess-container'>

        <p>Application Sent!</p>

        <p className='sub-1'>Please check your email.</p>

        <Tada duration={3000} >
          <img src={require('../images/handshake2.png')} />
        </Tada>



      </div>

    </div>

  );
}

export default Sucsess
