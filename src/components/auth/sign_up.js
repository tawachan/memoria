import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {


  onSubmit(values) {
    this.props.signUp(values, () => {
      this.props.history.push('/manage')
    });
 }

  renderField(field) {
    return(
      <div className="form-group">
        <label>{ field.label }</label>
        <input
          type="text"
          className="form-control"
          placeholder={ field.placeholder }
          { ...field.input } />
          { field.meta.touched ? field.meta.error : '' }
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props
    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        signup
        <Field label="Email" placeholder="test" name="email" component={this.renderField} />
        <Field label="Name" placeholder="test" name="name" component={this.renderField} />
        <Field label="Password" placeholder="test" name="password" component={this.renderField} />
        <Field label="Password Again" placeholder="test" name="password_confirm" component={this.renderField} />
        <button type="submit" className="btn btn-primary">SIGN UP!</button>
        { this.props.user.errors }
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function validate(values) {
  const errors = {}

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'password_confirm', 'name'],
  validate
}
)(connect(mapStateToProps, actions)(SignUp));
