import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { TextField, SelectField, MenuItem, FlatButton } from 'material-ui';
import _ from 'lodash';

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

  onSubmit() {
    const values = {
      name: this.state.name,
      description: this.state.description
    }
    this.props.updateProject(this.props.project.id, values);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <form>
        <TextField
          hintText="What do you wish to do ?"
          floatingLabelText="Your Wish"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.name || ''}
          onChange={ (event, newValue) => this.onNameChange(event) }
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
          errorText=""
          rows={1}
          rowsMax={4}
        /><br />
        <FlatButton
          label="Edit Project"
          primary={true}
          onClick={ () => this.onSubmit() }
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
