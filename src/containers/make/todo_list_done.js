import React, { Component } from 'react';
import { InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';

class TodoListDone extends Component {

  renderTodos() {
    return (
      _.map(this.props.todos_done, todo => {
        return(
          <InputGroup>
            <InputGroup.Addon>
              <input type="checkbox" aria-label="..." />
            </InputGroup.Addon>
            <FormControl type="text" value={ todo.task }/>
          </InputGroup>
        )
      })
    )
  }

  render() {
    return (
      <div className="todo-list">
        <span className="todo-title">To do list done</span>
        <FormGroup>
          { this.renderTodos() }
        </FormGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (state.projects.selected_project) {
    return {
      todos_done: _.filter(state.projects.selected_project.todos, todo => { return todo.status === 1 })
    }
  } else {
    return { todos: '' }
  }
}
export default connect(mapStateToProps)(TodoListDone);


