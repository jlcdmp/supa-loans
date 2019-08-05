import React, { Component } from 'react';
import Jumbo from './Jumbo';
import How from './How';
import '../CSS/Home.css'


class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <div className='home'>

          <Jumbo></Jumbo>

          <How />
        </div>

      </>
    );
  }
}

export default Home;