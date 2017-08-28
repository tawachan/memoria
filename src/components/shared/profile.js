import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

class Profile extends Component {
  componentWillMount() {
    if (this.props.user.authenticated) {
      this.props.fetchUser();
    }
  }

  render() {
    return (
      <div className="profile">
        { this.props.user.data ? this.props.user.data.name : '' }
      </div>
    )
  }

}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(Profile);
