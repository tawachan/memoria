import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarGroup,
  DropDownMenu,
  MenuItem,
  ListItem,
  ToolbarTitle,
  FontIcon,
  FlatButton,
  IconMenu,
  IconButton,
  ToolbarSeparator,
  Divider,
  Avatar
} from 'material-ui';
import UserIcon from 'react-material-icons/icons/action/account-circle';
import ProjectIcon from 'react-material-icons/icons/file/folder-open';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index'

const styles = {
  avatar: {
    objectFit: 'cover'
  }
}
class Navigation extends Component {

  componentWillMount() {
    if (this.props.user.authenticated) {
      this.props.fetchUser();
    }
  }

  onDrawerChange() {
    this.props.changeSidebar(!this.props.open);
  };

  renderUserInfo() {
    const userinfo = `${this.props.user.data ? this.props.user.data.name : ''}`
    return(
      <ListItem
        primaryText={userinfo}
        leftAvatar={<Avatar style={styles.avatar} src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20170731%2F70%2F7614960%2F37%2F900x1200xb63bdb98aef75ec58145b02.jpg%2F300%2F600&twidth=300&theight=0&qlt=80&res_format=jpg&op=r"/>}/>
    )
  }
  render() {

    const styles = {
      toolbar: {
        background: '#32936f'
      },
      title: {
        color: 'white',
      },
      projectName: {
        color: 'white'
      },
      button: {
        color: 'white',
        margin: '2',
      },
      icon: {
        color: 'white',
        margin: 20
      }
    }

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <ProjectIcon style={styles.icon}/>
          <ToolbarTitle onClick={() => this.onDrawerChange()}style={styles.projectName} text={this.props.project.name} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle style={styles.title} text="Memoria"/>
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <UserIcon color="white"/>
              </IconButton>
            }
            useLayerForClickAway={true}
            touchTapCloseDelay={5000}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            { this.renderUserInfo() }
            <Divider />
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
    open: state.status.sidebarOpen,
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(Navigation);



