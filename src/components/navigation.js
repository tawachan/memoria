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

  onDrawerChange() {
    this.props.changeSidebar(!this.props.open);
  };

  render() {

    const styles = {
      toolbar: {
        background: '#32936f'
      },
      title: {
        color: 'white'
      },
      projectName: {
        color: 'white',
        marginLeft: 40
      },
      button: {
        color: 'white',
        margin: '2',
      }
    }

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <ToolbarTitle style={styles.title} text="Memoria"/>
          <ToolbarSeparator />
          <ToolbarTitle style={styles.projectName} text={this.props.project.name} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label="Create Project" style={styles.button} backgroundColor="#E83F6F"/>
          <FlatButton label="Select Project" style={styles.button} backgroundColor="#E83F6F" onClick={() => this.onDrawerChange()}/>
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
            <Link to='/auth/sign_out'><MenuItem primaryText="Sign Out" /></Link>
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    project: state.project,
    open: state.status.sidebarOpen
  }
}

export default connect(mapStateToProps, actions)(Navigation);



