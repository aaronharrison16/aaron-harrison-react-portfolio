import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    }
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  getPortfolioItems() {
    axios
      .get('https://aaronharrison.devcamp.space/portfolio/portfolio_items', {withCredentials: true})
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(err => {
        console.log("Error in getPortfolioItems", err)
      });
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className='left-column'>
          <h2>Left Container</h2>
        </div>

        <div className='right-column'>
          <PortfolioSidebarList data={this.state.portfolioItems} />
        </div>
      </div>
    )
  }
}