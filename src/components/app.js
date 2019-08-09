import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Aaron Harrison Portfolio</h1>
        <div>The day started { moment().startOf('day').fromNow() }</div>
        <PortfolioContainer />
      </div>
    );
  }
}
