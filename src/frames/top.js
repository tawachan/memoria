import React, { Component } from 'react';
import NavigationTop from '../components/navigation_top'
import SignIn from '../components/auth/sign_in';

export default class Top extends Component {
  render() {
    return (
      <div>
        <NavigationTop />
        <SignIn />
      </div>
    )
  }
}
