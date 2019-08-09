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
