import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import '../CSS/Jumbo.css'

const Jumbo = () => {
  return (
    <div className='jumbo'>

      <div className='main-text' >
        <h3>Loan Comparrison</h3>
        <h2 className='title' >Personal Installment loans the supa way.</h2>
      </div>

      <div className="title-body">
        <h4>Supa Easy</h4>
        <p>4 step process</p>
        <h4>Supa Quick</h4>
        <p>Same day decisions*</p>
        <h4>Supa Simple</h4>
        <p>flexible re-payements</p>
      </div>

    </div>





  );
}

export default Jumbo;