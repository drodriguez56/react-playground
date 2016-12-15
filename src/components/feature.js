import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount(){
    this.props.fetchMessage();
  }
  render(){
    return( 
        <div>
          <div>message:</div>
          <div>{this.props.featureMessage}</div> 
        </div>
      )
  }
}
function mapStateToProps(state){
  return { featureMessage: state.feature.message }
}

export default connect(mapStateToProps, actions)(Feature);
