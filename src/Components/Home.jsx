import React, { Component } from 'react';
import Jumbo from './Jumbo';
import How from './How';
import '../CSS/Home.css'
import Faq from './Faq';
import Disc from './Disc';
import What from './What';
import Eg from './Eg';
import Who from './Who';


class Home extends Component {
  state = {}

  render() {
    return (
      < div className='collumn'>

        <Jumbo />

        <div className='home'>

          <Who />


          <How />



          <What />

          <Eg />

          <Faq />

          <Disc />



        </div>

      </ div>
    );
  }
}

export default Home;