import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  FlatButton,
  ToolbarSeparator,
} from 'material-ui';
import * as actions from '../actions/index'

class Navigation extends Component {

  onSignInClick() {
    this.props.switchSignInModal(true);
  }

  onSignUpClick() {
    this.props.switchSignUpModal(true);
  }

  render() {

    const styles = {
      toolbar: {
        background: '#32936f'
      },
      title: {
        color: 'white'
      },
      button: {
        color: 'white',
        margin: '0'
      }
    }

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <ToolbarTitle style={styles.title} text="Memoria"/>
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label="Sign In" style={styles.button} onClick={ () => this.onSignInClick() } />
          <FlatButton label="Sign Up" style={styles.button} onClick={ () => this.onSignUpClick() } />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    project: state.project
  }
}

export default connect(mapStateToProps, actions)(Navigation);



