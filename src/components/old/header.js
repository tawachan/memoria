import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    return (
      <div className="header">
        { this.props.selected_project ? this.props.selected_project.name : '' }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selected_project: state.projects.selected_project
  }
}

export default connect(mapStateToProps)(Header);
