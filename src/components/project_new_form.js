import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/index';
import { FlatButton, TextField } from 'material-ui';
import { Field, reduxForm } from 'redux-form';

class ProjectNewForm extends Component {

  onSubmit(values) {
    this.props.createProject(values);
    this.props.changeSidebar(false);
    this.props.switchProjectNewModal(false);
 }

  renderField(field) {
    return(
      <TextField
        floatingLabelText={ field.label }
        fullWidth={true}
        type={ field.type }
        errorText={ field.meta.touched ? field.meta.error : '' }
        { ...field.input }
      />
    )
  }

  render() {

    return (
      <form>
        <Field label="Name" type="text" name="name" component={this.renderField} />
        <Field label="Description" type="textarea" name="description" component={this.renderField} />
        <FlatButton
          label="New Project"
          primary={true}
          onClick={ this.props.handleSubmit(this.onSubmit.bind(this)) }
          style={{ float: "right" }}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
  }
}

function validate(values) {
  const errors = {}
  if (!values.name) {
    errors.name = 'name can not be blank'
  }
  return errors
}

export default reduxForm({
  form: 'newProject',
  fields: ['name', 'description'],
  validate
})(withRouter(connect(mapStateToProps, actions)(ProjectNewForm)));
