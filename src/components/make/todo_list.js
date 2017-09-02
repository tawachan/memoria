import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import _ from 'lodash';
import { List, Subheader, ListItem, Checkbox } from 'material-ui';
import DoneIcon from 'react-material-icons/icons/action/done';

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
    const value = checked ? 1 : 0
    this.props.updateTodo(id, "status", value);
  }

  onTodoClick(id) {
    this.props.fetchTodo(id);
  }


  renderTodos() {
    return (
      _.map(this.props.todos, todo => {
        return[
          <ListItem
            key={todo.id}
            primaryText={todo.task}
            style={styles.todo}
            onClick={() => this.onTodoClick(todo.id)}
            leftIcon={
              <Checkbox
                iconStyle={styles.checkbox}
                checked={todo.status === 1}
                onCheck={(e, checked) => this.onCheckboxChange(todo.id, checked)}
              />
            }
          />
        ]
      })
    )
  }

  render() {
    return (
      <List>
        <ReactCSSTransitionGroup
          transitionName="todo-transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.renderTodos() }
        </ReactCSSTransitionGroup>
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


