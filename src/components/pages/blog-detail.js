import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogFeaturedImage from "../blog/blog-featured-image";
import BlogForm from "../blog/blog-form";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(
      this
    );
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    console.log("Handle Delete Click");
  }

  handleUpdateFormSubmission(blog) {
    this.setState({
      blogItem: blog,
      editMode: false
    });
  }

  handleFeaturedImageDelete() {
    this.setState({
      blogItem: {
        featured_image_url: ""
      }
    });
  }

  handleEditClick() {
    if (this.props.loggedInStatus === "LOGGED_IN") {
      this.setState({ editMode: true });
    }
  }

  handleDeleteClick() {
    console.log("Handle Delete Click");
    var dialogResponse = confirm("Are you sure you want to delete your post?");
    if (this.props.loggedInStatus === "LOGGED_IN" && dialogResponse) {
      axios
        .delete(
          `https://aaronharrison.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`,
          { withCredentials: true }
        )
        .then(response => {
          this.props.history.push("/blog");
        });
    }
  }

  getBlogItem() {
    axios
      .get(
        `https://aaronharrison.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then(response => {
        this.setState({
          blogItem: response.data.portfolio_blog
        });
      })
      .catch(error => {
        console.log("getBlogItem", error);
      });
  }

  componentWillMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem;

    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm
            handleUpdateFormSubmission={this.handleUpdateFormSubmission}
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            editMode={this.state.editMode}
            blog={this.state.blogItem}
          />
        );
      } else {
        return (
          <div className="content-container">
            <h1>{title}</h1>

            <BlogFeaturedImage img={featured_image_url} />
            <div className="content">{ReactHtmlParser(content)}</div>

            {this.props.loggedInStatus === "LOGGED_IN" ? (
              <div className="blog-options-wrapper">
                <div className="icon">
                  <FontAwesomeIcon icon="edit" onClick={this.handleEditClick} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon
                    icon="trash"
                    onClick={this.handleDeleteClick}
                  />
                </div>
              </div>
            ) : null}
          </div>
        );
      }
    };

    return <div className="blog-container">{contentManager()}</div>;
  }
}
