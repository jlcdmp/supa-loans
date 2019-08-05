import React from 'react';
import './CSS/App.css';
import Home from './Components/Home';
import How from './Components/How'
import Faq from './Components/Faq'
import Fees from './Components/Fees'
import Apply from './Components/Apply'
import Navigation from './Components/Navigation'
import { Router } from '@reach/router'



function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Home path='/home' />
        <How path='/how' />
        <Faq path='/faq' />
        <Fees path='/fees' />
        <Apply path='apply' />
      </Router>
    </>
  );
}

export default App;
