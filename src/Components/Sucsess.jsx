import React from 'react';
import { Fade, Slide } from 'react-reveal'

import '../CSS/Sucsess.css'


const Sucsess = () => {
  return (

    <div className='sucsess'>

      <div className='sucsess-container'>

        <p>Application Sent!</p>

        <p className='sub-1'>Please check your email.</p>

        <Fade left bottom duration={4000}>

          <img src={require('../images/sent.png')} />
        </Fade>



      </div>

    </div>

  );
}

export default Sucsess
