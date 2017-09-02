import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { FlatButton, RaisedButton, Dialog } from 'material-ui';
import _ from 'lodash';

class TodoDelete extends Component {

  handleClose() {
    this.props.switchDeleteTodoModal(false);
  }

  handleOpen() {
    this.props.switchDeleteTodoModal(true);
  }

  onTodoClick(id) {
    this.props.deleteTodo(id);
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
        onClick={ () => this.onTodoClick(this.props.todo.id) }
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
          Are you sure deleting this todo?
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const activeId = state.project.activeTodoId
  return {
    modalOpen: state.status.deleteTodoModalOpen,
    todo: activeId ? _.filter(state.project.todos, (todo) => { return todo.id === activeId})[0] : ''
  }
}

export default connect(mapStateToProps, actions)(TodoDelete);
