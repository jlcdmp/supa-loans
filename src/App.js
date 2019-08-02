import React from 'react';
import './App.css';
import Navigation from './Components/navigation';



function App() {
  return (
    <div className='App' >

      <h1> supa-loans</h1>
      <div className='navigation'>

        <Navigation />

      </div>

      <div className='content'>
        <p>content</p>
      </div>


    </div>

  );
}

export default App;
