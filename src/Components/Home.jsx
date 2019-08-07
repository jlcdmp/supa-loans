import React, { Component } from 'react';
import Jumbo from './Jumbo';
import How from './How';
import '../CSS/Home.css'
import Faq from './Faq';
import Disc from './Disc';


class Home extends Component {
  state = {}

  render() {
    return (
      < div className='collumn'>

        <Jumbo></Jumbo>

        <div className='home'>
          <How />

          <Faq />

          <Disc />
        </div>

      </ div>
    );
  }
}

export default Home;