import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  render(){
    return(
      <div>
        <div className="text-md-right">
          <Link to="/posts/new" className="btn btn-primary">New Post</Link>
        </div>
        list of posts here
      </div>
      );
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)