import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Aaron Harrison React Portfolio",
      data: [
        {title: "Sprint"}, 
        {title: "Boostability"},
        {title: "SC Builders"}
      ]
    };

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={ item.title } />;
    })
  }
  
  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else"
    })
  }

  render() {
    return (
      <div>
        <h1>{ this.state.pageTitle }</h1>
        <h2>Portfolio Items go here...</h2>
        
        {this.portfolioItems()}

        <hr />

        <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    )
  }
}