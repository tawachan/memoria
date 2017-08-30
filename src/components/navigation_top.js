import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarGroup,
  DropDownMenu,
  MenuItem,
  ToolbarTitle,
  FontIcon,
  FlatButton,
  IconMenu,
  IconButton,
  ToolbarSeparator,
} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index'

class Navigation extends Component {

  renderAuthButtons(authenticated) {
    const styles = {
      button: {
        color: 'white',
        margin: '0'
      }
    }

    if (!authenticated) {
      return [
      ]
    }
  }

  renderUnauthItem(authenticated) {
    if (authenticated) {
      return (
        <Link to='/auth/sign_out'><MenuItem primaryText="Sign Out" /></Link>
      )
    }
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
          <FlatButton label="Sign In" style={styles.button} />
          <FlatButton label="Sign Up" style={styles.button} />
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



