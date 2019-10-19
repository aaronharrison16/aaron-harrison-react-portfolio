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
  }

  getPortfolioItems() {
    axios
      .get("https://aaronharrison.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        // handle success
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Laoding...</div>;
    }
    return (
      <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
    );
  }
}
