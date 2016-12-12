import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: "" };
  }
  onImputChange = (event) =>{
    this.setState({term: event.target.value});
  }
  onFormSubmit = (event) =>{
    event.preventDefault();
    // get weather data
    const response = this.props.fetchWeather(this.state.term);
    this.setState({term: ""});
  }
  render(){
    return(
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input
            className="form-control"
            placeholder="what city forcast you whant?"
            value={this.state.term}
            onChange={this.onImputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className='btn btn-secondary'>Submit</button>
          </span>
        </form>
      )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);