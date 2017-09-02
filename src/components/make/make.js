import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import TodoList from './todo_list';
import TodoEdit from './todo_edit';
import TodoNew from './todo_new';

class Make extends Component {

  renderEdit() {
    if (this.props.todo_selected) {
      return(
        <div className="make-column make-right">
          <TodoEdit />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="make">
        <div className='make-column make-left'>
          <TodoNew />
          <TodoList />
        </div>
        <div className="make-column make-right">
          <TodoEdit />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todo_selected: state.project.activeTodoId ? true : false
  }
}

export default connect(mapStateToProps)(Make);
