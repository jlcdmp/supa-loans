import React from 'react';
import './CSS/App.css';
import Home from './Components/Home';
import How from './Components/How'
import Faq from './Components/Faq'
import Apply from './Components/Apply'
import Navigation from './Components/Navigation.jsx'
import { Router } from '@reach/router'
import Sucsess from './Components/Sucsess'



function App() {
  return (
    <div className='hello'>


      <div className='ribbon-container'>

        <div className='ribbon'>
          <p>For free and impartial money advice go to</p><p className='hide'  >-</p><a href='https://www.usa.gov/topics/money/credit/debt/out-of-control.shtml'> www.usa.gov</a>
        </div>
      </div>




      <Navigation />
      <Router >
        <Home path='/' />
        <How path='/how' />
        <Faq path='/faq' />
        <Apply path='/apply' />
        <Sucsess path='/sucsess' />
      </Router>
    </div>
  );
}

export default App;
