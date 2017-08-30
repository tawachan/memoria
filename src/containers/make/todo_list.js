import React, { Component } from 'react';
import { InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';

class TodoList extends Component {

  renderTodos() {
    return (
      _.map(this.props.todos, todo => {
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
        <span className="todo-title">To do list</span>
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
      todos: _.filter(state.projects.selected_project.todos, todo => { return todo.status === 0 })
    }
  } else {
    return { todos: '' }
  }
}
export default connect(mapStateToProps)(TodoList);


