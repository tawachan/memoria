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

class Header extends Component {

  renderAuthButtons(authenticated) {
    const styles = {
      button: {
        color: 'white',
        margin: '0'
      }
    }

    if (!authenticated) {
      return [
        <FlatButton label="Sign In" style={styles.button} />,
        <FlatButton label="Sign Up" style={styles.button} />
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
      toolbartitle: {
        color: 'white'
      }
    }

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <ToolbarTitle style={styles.toolbartitle} text="Memoria" />
        </ToolbarGroup>
        <ToolbarGroup>
          { this.renderAuthButtons(this.props.authenticated) }
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon color="white"/>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
          { this.renderUnauthItem(this.props.authenticated) }
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);



