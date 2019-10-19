import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      portfolio_item: {},
      id: "",
      name: "",
      description: "",
      url: ""
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://aaronharrison.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          isLoading: false,
          portfolio_item: response.data.portfolio_item
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {
      portfolio_item,
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolio_item;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "color",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="portfolio-detail-wrapper">
        {this.state.isLoading ? (
          <div className="content-loader">
            <FontAwesomeIcon icon="spinner" spin />
          </div>
        ) : (
          <div className="portfolio-detail-content">
            <div className="banner" style={bannerStyles}>
              <img src={logo_url} style={logoStyles} />
            </div>

            <div className="portfolio-detail-description-wrapper">
              <div className="description">{description}</div>
            </div>

            <div className="bottom-content-wrapper">
              <a href={url} className="site-link" target="_blank">
                Visit {name}
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
