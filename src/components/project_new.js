import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Dialog } from 'material-ui';

import ProjectNewForm from './project_new_form';

class ProjectNew extends Component {

  handleClose() {
    this.props.switchProjectNewModal(false);
  }

  handleOpen() {
    this.props.switchProjectNewModal(true);
  }

  render() {

    return (
      <div>
        <Dialog
          title="New Project"
          modal={false}
          open={this.props.modalOpen || false}
          onRequestClose={ () => this.handleClose() }
        >
          <ProjectNewForm />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    modalOpen: state.status.projectNewModalOpen,
  }
}

export default connect(mapStateToProps, actions)(ProjectNew);
