import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOut();
  }
  render() {
    return (
      <div>
        <p>Sorry see you again</p>
        { this.props.authenticated ? 'login' : 'logout' }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, actions)(SignOut);
