import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import _ from 'lodash';
import { List, Subheader, ListItem, Checkbox } from 'material-ui';

const styles = {
  todo: {
    border: '0.5px solid #EEEEEE',
  },
  checkbox: {
    fill: '#E83F6F',
  }
};

class TodoList extends Component {

  onCheckboxChange(id, checked) {
    this.props.setTodoStatus(id, checked);
  }

  renderTodos() {
    return (
      _.map(this.props.todos, todo => {
        return(
          <ListItem
            key={todo.id}
            primaryText={todo.task}
            style={styles.todo}
            leftCheckbox={
              <Checkbox
                iconStyle={styles.checkbox}
                checked={todo.status === 1}
                onCheck={(e, checked) => this.onCheckboxChange(todo.id, checked)}
              />
            }
          />
        )
      })
    )
  }

  render() {
    return (
      <List>
        <Subheader>To Do List</Subheader>
        { this.renderTodos() }
      </List>
    )
  }
}

function mapStateToProps(state) {
  if (state.project) {
    return {
      todos: _.sortBy(state.project.todos, 'id')
    }
  } else {
    return { todos: '' }
  }
}
export default connect(mapStateToProps, actions)(TodoList);


