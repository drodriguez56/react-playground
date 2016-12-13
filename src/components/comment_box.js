import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = {comment: ""};
  }

  handleChange = (e) =>{
    this.setState({comment: e.target.value})
  }

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''})
  }
  render(){
    return(
      <form onSubmit={this.handleSumbit} className="comment-box">
      <h4>Add a comment</h4>
      <textarea onChange={this.handleChange} value={this.state.comment}/>
      <div><button action='submit' >submit</button></div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);