import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { TextField } from 'material-ui';

class TodoNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: '',
    }
  }

  onTodoSubmit(e, project_id) {
    const enterKey = 13;
    const value = e.target.value.trim();
    if ((this.props.project) && (e.keyCode === enterKey) && (value) ) {
      this.setState({ task: '' })
      this.props.createTodo(project_id, value);
    }
  }

  onTaskChange(e) {
    this.setState({ task: e.target.value });
  }

  render() {
    return (
      <div className="todo-new">
        <TextField
          hintText="New Wish"
          floatingLabelText="Your Wish"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.task}
          onChange={ (e, newValue) => this.onTaskChange(e) }
          onKeyDown={(e) => this.onTodoSubmit(e, this.props.project.id)}
        /><br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    project: state.project
  }
}
export default connect(mapStateToProps, actions)(TodoNew);


