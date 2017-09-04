import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/index';
import { FlatButton, TextField } from 'material-ui';
import { Field, reduxForm } from 'redux-form';

class ProjectNewForm extends Component {

  onSubmit(values) {
    this.props.createProject(values);
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
        <div className="error-message">{ this.props.errors.user ? this.props.errors.user : ' ' }</div>
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
  console.log(state)
  return {
    errors: state.errors,
  }
}

function validate(values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'enter email'
  } else {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!values.email.match(re)) {
      errors.email = 'enter correct email address';
    }
  }


  if (!values.password) {
    errors.password = 'enter password'
  }

  return errors
}

export default reduxForm({
  form: 'Login',
  fields: ['name', 'description'],
  validate
})(withRouter(connect(mapStateToProps, actions)(ProjectNewForm)));
