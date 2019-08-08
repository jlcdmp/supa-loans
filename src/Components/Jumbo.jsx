import React from 'react';
import { Button } from 'react-bootstrap'
import '../CSS/Jumbo.css'

const Jumbo = () => {
  return (
    <div className='jumbo'>




      <img className='image' src={require("/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/NETWORK4.png")} />

      <div className='container'>



        <p className='shad' >Loan Comparrison</p>
        <p className='title' >Personal Installment Loans</p>
        <p className='sub'>The Supa Way</p>


        <ul className='list' >
          <li>Supa Quick </li>
          <li>Supa Simple </li>
          <li>Supa Easy </li>
        </ul>


        <Button href={'apply'} >Secure A Loan Today</Button>

      </div>



    </div>





  );
}

export default Jumbo;