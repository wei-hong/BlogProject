import React, { Component } from "react";
import ListGroup from "../Listgroup";
import PostList from "./PostList";

import { getFirebase } from "./../../firebase/firebase";
import Search from "./../search";
class Post extends Component {
  state = { posts: [], types: ["AllPost"], selectType: "", query: "" };

  componentDidMount() {
    this.setState({ posts: this.props.posts });
  }
  componentDidUpdate() {
    this.handleType();
  }
  handleItemSelect = (type) => {
    this.setState({ selectType: type });
  };
  handleDelete = (slug) => {
    const originPosts = this.state.posts;
    const posts = originPosts.filter((post) => post.slug !== slug);

    getFirebase().database().ref("/posts").child(slug).remove();
    this.setState({ posts });
  };
  onChange = (query) => {
    this.setState({ query });
  };
  getPageData = () => {
    let allPosts = this.state.posts;
    if (this.state.query) {
      allPosts = this.state.posts.filter((post) =>
        post.blogTitle.toLowerCase().includes(this.state.query)
      );
    } else if (this.state.selectType && this.state.selectType !== "AllPost") {
      allPosts = this.state.posts.filter(
        (post) =>
          post.blogCategory.toLowerCase() ===
          this.state.selectType.toLowerCase()
      );
    } else {
      return allPosts;
    }
    return allPosts;
  };
  handleType = () => {
    this.state.posts.forEach((post) => {
      if (this.state.types.indexOf(post.blogCategory) < 0) {
        this.setState({ types: [...this.state.types, post.blogCategory] });
      }
    });
  };
  render() {
    const filter = this.getPageData();
    //if (this.state.posts.length === 0)
    //return <p className="text-center">No post</p>;
    return (
      <div className="d-inline-flex mx-auto">
        <ListGroup
          selectType={this.state.selectType}
          types={this.state.types}
          typeSelect={this.handleItemSelect}
        />
        <div className="mx-auto">
          <Search onChange={this.onChange} />
          {filter.length != 0 ? (
            <PostList posts={filter} handleDelete={this.handleDelete} />
          ) : (
            <div>
              <p className="text-center">No Posts</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Post;
