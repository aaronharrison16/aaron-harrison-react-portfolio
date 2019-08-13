import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      pageTitle: "Aaron Harrison React Portfolio",
      data: [
        { title: "Sprint", catagory: "eCommerce" }, 
        { title: "Boostability", catagory: "Scheduling"},
        { title: "SC Builders", catagory: "Enterprise"},
        { title: "Test Test Test", catagory: "eCommerce" }
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);

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
      return <PortfolioItem title={ item.title } />;
    })
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