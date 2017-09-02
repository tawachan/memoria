import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'material-ui';
import ProjectList from './project_list';
import * as actions from '../actions/index';

class Sidebar extends Component {

  onDrawerChange(open, reason) {
    console.log(reason)
    this.props.changeSidebar(open);
  };

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open || false}
        width={250}
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
