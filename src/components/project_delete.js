import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { FlatButton, Dialog } from 'material-ui';
import _ from 'lodash';

class ProjectDelete extends Component {

  handleClose() {
    this.props.switchProjectDeleteModal(false);
  }

  handleOpen() {
    this.props.switchProjectDeleteModal(true);
  }

  onProjectClick() {
    this.props.deleteProject(this.props.project.id);
    this.props.switchProjectEditModal(false);
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={ () => this.handleClose() }
      />,
      <FlatButton
        label="Delete"
        style={{ color: 'red' }}
        onClick={ () => this.onProjectClick() }
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          contentStyle={{ width: '300px'}}
          open={this.props.modalOpen || false}
          onRequestClose={ () => this.handleClose() }
        >
          Are you sure deleting this project?
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const activeId = state.project.activeProjectId
  return {
    modalOpen: state.status.projectDeleteModalOpen,
    project: state.project
  }
}

export default connect(mapStateToProps, actions)(ProjectDelete);
