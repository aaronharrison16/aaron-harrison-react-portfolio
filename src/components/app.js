import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        < NavigationContainer />
        <h1>Aaron Harrison Portfolio</h1>
        <div>The day started { moment().startOf('day').fromNow() }</div>
        <PortfolioContainer />
      </div>
    );
  }
}
