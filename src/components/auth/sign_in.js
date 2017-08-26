import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/';
import { Link } from 'react-router-dom';


class SignIn extends Component {

  component

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

  onSubmit(values) {
     this.props.signIn(values, () => {
      this.props.history.push('/plan')
    });
  }

  render() {
    const{ handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field label="Email" placeholder="test" name="email" component={this.renderField} />
          <Field label="Password" placeholder="test" name="password" component={this.renderField} />
          <Field label="Password Again" placeholder="test" name="password_confirm" component={this.renderField} />
          <button type="submit" className="btn btn-primary">Submit</button>
          { this.props.errors ? this.props.errors.user : '' }
        </form>
        <div>
          { this.props.user.authenticated ? "login!" : "not yet login" }
        </div>
        <Link to="signout" className="btn btn-default">Sign out</Link>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "error";
  }



  return errors;
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default reduxForm({
  form: 'Login',
  fields: ['email', 'password', 'password_confirm'],
  validate
})(connect(mapStateToProps, actions)(SignIn));
