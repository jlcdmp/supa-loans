import React from 'react';
import Tada from 'react-reveal/Tada'
import Jump from 'react-reveal/Jump'

import '../CSS/Sucsess.css'


const Sucsess = () => {
  return (

    <div className='sucsess'>

      <div className='sucsess-container'>

        <p>Application Sent!</p>

        <p className='sub-1'>Please check your email.</p>

        <Jump duration={2000}>
          <img src={require('../images/handshake2.png')} />
        </Jump>



      </div>

    </div>

  );
}

export default Sucsess
