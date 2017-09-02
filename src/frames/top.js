import React, { Component } from 'react';
import NavigationTop from '../components/navigation_top'
import SignIn from '../components/auth/sign_in';
import SignUp from '../components/auth/sign_up';

export default class Top extends Component {
  render() {
    return (
      <div>
        <NavigationTop />
        <SignIn />
        <SignUp />
      </div>
    )
  }
}
