import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return <div>{post}</div>;
    });
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {
    getPosts
  }
)(PostList);
