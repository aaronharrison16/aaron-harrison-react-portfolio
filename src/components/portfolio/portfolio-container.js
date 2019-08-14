import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      pageTitle: "Aaron Harrison React Portfolio",
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems() {
    axios
      .get('https://aaronharrison.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        this.setState({
          data: response.data.portfolio_items
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }

  handleFilter(filter) {
    this.setState(({
      data: this.state.data.filter(item => {
        return item.catagory === filter;
      })
    }))
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={ item.id } title={ item.name } url={ item.url } slug={ item.id } />;
    })
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {    
    if (this.state.isLoading) {
      return (
        <div>Laoding...</div>
      )
    }
    return (
      <div>
        <h1>{ this.state.pageTitle }</h1>

        <button onClick={() => this.handleFilter("eCommerce")} >eCommerce</button>
        <button onClick={() => this.handleFilter("Scheduling")} >Scheduling</button>
        <button onClick={() => this.handleFilter("Enterprise")} >Enterprise</button>

        {this.portfolioItems()}

    </div>
    )
  }
}