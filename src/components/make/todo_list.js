import React, { Component } from 'react';
import { InputGroup, FormControl, FormGroup } from 'react-bootstrap';

class TodoList extends Component {

  renderTodo(todo) {
    return (
      <InputGroup>
        <InputGroup.Addon>
          <input type="checkbox" aria-label="..." />
        </InputGroup.Addon>
        <FormControl type="text" value="todo is displayed here"/>
      </InputGroup>
    )
  }

  render() {
    return (
      <div className="todo-list">
        <FormGroup>
          { this.renderTodo("todo") }
        </FormGroup>
      </div>
    )
  }
}
export default TodoList;


