import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import _ from 'lodash';
import { List, Subheader, ListItem, Toggle } from 'material-ui';

const styles = {
  thumbOff: {
    backgroundColor: 'white',
  },
  trackOff: {
    backgroundColor: '#32936F',
  },
  thumbSwitched: {
    backgroundColor: '#E83F6F',
  },
  trackSwitched: {
    backgroundColor: '#E8AEBE',
  },
  todo: {
    border: '0.5px solid #EEEEEE'
  }
};

class TodoList extends Component {

  onToggleChange(id, checked) {
    console.log('executed')
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
            rightToggle={
              <Toggle
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
                defaultToggled={todo.status === 1}
                onToggle={(e, checked) => this.onToggleChange(todo.id, checked)}
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
      todos: state.project.todos
    }
  } else {
    return { todos: '' }
  }
}
export default connect(mapStateToProps, actions)(TodoList);


