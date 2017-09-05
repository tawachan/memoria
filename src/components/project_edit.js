import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Dialog } from 'material-ui';

import ProjectEditForm from './project_edit_form';
import ProjectDelete from './project_delete';

class ProjectEdit extends Component {

  handleClose() {
    this.props.switchProjectEditModal(false);
  }

  handleOpen() {
    this.props.switchProjectEditModal(true);
  }

  render() {

    return (
      <div>
        <Dialog
          title="Edit Project"
          modal={false}
          open={this.props.modalOpen || false}
          onRequestClose={ () => this.handleClose() }
        >
          <ProjectEditForm />
          <ProjectDelete />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    modalOpen: state.status.projectEditModalOpen,
  }
}

export default connect(mapStateToProps, actions)(ProjectEdit);
