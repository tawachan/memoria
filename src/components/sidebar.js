import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'material-ui';
import ProjectList from './project_list';
import * as actions from '../actions/index';

class Sidebar extends Component {

  onDrawerChange(open, reason) {
    this.props.changeSidebar(open);
  };

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open || false}
        width={300}
        onRequestChange={(open, reason) => this.onDrawerChange(open, reason) }
      >
        <ProjectList />
      </Drawer>
    )
  }
}

function mapStateToProps(state) {
  return {
    open: state.status.sidebarOpen
  }
}

export default connect(mapStateToProps, actions)(Sidebar);
