import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { TextField, FlatButton } from 'material-ui';

class ProjectEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    }
  }

  componentWillMount() {
    this.setState({
      name: this.props.project.name,
      description: this.props.project.description,
    })
  }

  onEditSubmit() {
    const values = {
      name: this.state.name,
      description: this.state.description
    }
    this.props.updateProject(this.props.project.id, values);
    this.props.switchProjectEditModal(false);
  }

  onDeleteSubmit() {
    this.props.switchProjectDeleteModal(true);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          hintText="Project Name"
          floatingLabelText="Project Name"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.name || ''}
          onChange={ (event, newValue) => this.onNameChange(event) }
          errorText=""
        /><br />
        <TextField
          hintText="Give me more detail of your project"
          floatingLabelText="Description"
          floatingLabelFixed={true}
          multiLine={true}
          fullWidth={true}
          value={this.state.description || ''}
          onChange={ (event, newValue) => this.onDescriptionChange(event) }
          errorText=""
          rows={1}
          rowsMax={4}
        /><br />
        <FlatButton
          label="Delete Project"
          onClick={ () => this.onDeleteSubmit() }
          style={{ float: "left", color: "red" }}
        />
        <FlatButton
          label="Edit Project"
          primary={true}
          onClick={ () => this.onEditSubmit() }
          style={{ float: "right" }}
        />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    project: state.project,
  }
}


export default connect(mapStateToProps, actions)(ProjectEditForm);
