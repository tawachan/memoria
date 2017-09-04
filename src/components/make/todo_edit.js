import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { TextField, SelectField, MenuItem, FlatButton } from 'material-ui';
import DeleteIcon from 'react-material-icons/icons/action/delete';
import _ from 'lodash';

class TodoEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: '',
      description: '',
      page: '',
      project_id: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      task: nextProps.todo.task,
      description: nextProps.todo.description,
      page: nextProps.todo.page,
      project_id: nextProps.todo.project_id,
    })
  }

  onValueChange(column, value) {
    if (this.props.todo) {
      this.props.updateTodo(this.props.todo.id, column, value);
      if (column === 'project_id') {
        this.props.fetchTodo('');
      }
    }
  }

  onTaskChange(e) {
    this.setState({ task: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  onPageChange(e) {
    this.setState({ page: e.target.value });
  }

  onDeleteClick() {
    if (this.props.todo) {
      this.props.switchDeleteTodoModal(true);
    }
  }

  renderProjectList(projects) {
    return(
      _.map(projects, (project) => {
        return(
          <MenuItem key={project.id} value={project.id} primaryText={project.name} />
          )
      })
  )
  }

  render() {
    return (
      <div className="make-edit">
        <TextField
          hintText="What do you wish to do ?"
          floatingLabelText="Your Wish"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.task || ''}
          onChange={ (event, newValue) => this.onTaskChange(event) }
          onBlur={(event) => this.onValueChange("task", event.target.value)}
          errorText=""
        /><br />
        <TextField
          hintText="Give me more detail of your wish"
          floatingLabelText="Description"
          floatingLabelFixed={true}
          multiLine={true}
          fullWidth={true}
          value={this.state.description || ''}
          onChange={ (event, newValue) => this.onDescriptionChange(event) }
          onBlur={(event) => this.onValueChange("description", event.target.value)}
          errorText=""
          rows={1}
          rowsMax={4}
        /><br />
        <TextField
          hintText="what makes you think so ?"
          floatingLabelText="Page Link"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.page || ''}
          onChange={ (event, newValue) => this.onPageChange(event) }
          onBlur={(event) => this.onValueChange("page", event.target.value)}
          errorText=""
        /><br />
        <SelectField
          floatingLabelText="Project"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.project_id || ''}
          onChange={(event, key, payload) => this.onValueChange("project_id", payload)}
          maxHeight={200}
        >
          { this.renderProjectList(this.props.projects) }
        </SelectField>
        <FlatButton
          primary={true}
          icon={<DeleteIcon />}
          style={{float: 'right'}}
          onClick={() => this.onDeleteClick()}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const activeId = state.project.activeTodoId
  return {
    projects: state.projects,
    project: state.project,
    todo: activeId ? _.filter(state.project.todos, (todo) => { return todo.id === activeId})[0] : ''
  }
}


export default connect(mapStateToProps, actions)(TodoEdit);
