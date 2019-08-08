import React from 'react';
import './CSS/App.css';
import Home from './Components/Home';
import How from './Components/How'
import Faq from './Components/Faq'
import Apply from './Components/Apply'
import Navigation from './Components/Navigation'
import { Router } from '@reach/router'



function App() {
  return (
    <div className='hello'>
      <Navigation />
      <Router primary={false} >
        <Home path='/' />
        <How path='/how' />
        <Faq path='/faq' />
        <Apply path='apply' />
      </Router>
    </div>
  );
}

export default App;
