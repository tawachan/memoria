import React, { Component } from 'react';
import TodoList from './todo_list'

class Make extends Component {

  render() {
    return (
      <div className="make">
        <div className='make-column make-left'>
          <TodoList />
        </div>
        <div className="make-column make-right">
          right
        </div>
      </div>
    )
  }
}
export default Make;
