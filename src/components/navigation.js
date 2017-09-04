import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarGroup,
  MenuItem,
  ListItem,
  ToolbarTitle,
  IconMenu,
  IconButton,
  ToolbarSeparator,
  Avatar
} from 'material-ui';
import { Tabs, Tab } from 'material-ui/Tabs';
import MakeIcon from 'react-material-icons/icons/action/schedule';
import KeepIcon from 'react-material-icons/icons/hardware/memory';
import ShareIcon from 'react-material-icons/icons/social/share';
import SettingIcon from 'react-material-icons/icons/action/settings';
import UserIcon from 'react-material-icons/icons/action/account-circle';
import ProjectIcon from 'react-material-icons/icons/file/folder-open';
import * as actions from '../actions/index'

const styles = {
  avatar: {
    objectFit: 'cover',
  },
  user: {
    color: 'white'
  },
  toolbar: {
    background: '#32936f'
  },
  tabs: {

  },
  tab: {
    padding: '0px 20px'
  },
  title: {
    color: 'white',
    marginLeft: 20
  },
  projectName: {
    color: 'white',
    marginLeft: 10
  },
  button: {
    color: 'white',
    margin: 2,
  },
  icon: {
    color: 'white',
    margin: 10
  },
}
class Navigation extends Component {

  componentWillMount() {
    if (this.props.user.authenticated) {
      this.props.fetchUser();
      this.props.changeTab(parseInt(localStorage.getItem('active-tab')) || 0);
    }
  }

  onTabChange = (value) => {
    this.props.changeTab(value)
  };

  onDrawerChange() {
    this.props.changeSidebar(!this.props.open);
  };

  onSignoutClick() {
    this.props.signOut();
  }

  renderUserInfo() {
    const userinfo = `${this.props.user.data ? this.props.user.data.name : ''}`
    return(
      <ListItem
        style={styles.user}
        primaryText={userinfo}
        leftAvatar={<Avatar style={styles.avatar} src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20170731%2F70%2F7614960%2F37%2F900x1200xb63bdb98aef75ec58145b02.jpg%2F300%2F600&twidth=300&theight=0&qlt=80&res_format=jpg&op=r"/>}/>
    )
  }
  render() {

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <ProjectIcon onClick={() => this.onDrawerChange()} style={styles.icon}/>
          <ToolbarTitle onClick={() => this.onDrawerChange()} style={styles.projectName} text={ this.props.project.name || 'Select Your Project' } />
        </ToolbarGroup>
        <ToolbarGroup>
          <Tabs
            onChange={this.onTabChange}
            value={this.props.activeTab}
            tabItemContainerStyle={styles.tabs}
          >
            <Tab icon={<MakeIcon />} style={styles.tab} label="" value={0} />
            <Tab icon={<KeepIcon />} style={styles.tab} label="" value={1} />
            <Tab icon={<ShareIcon />} style={styles.tab} label="" value={2} />
            <Tab icon={<SettingIcon />} style={styles.tab} label="" value={3} />
          </Tabs>
          <ToolbarSeparator />
          <ToolbarTitle style={styles.title} text="Memoria"/>

          <IconMenu
            iconButtonElement={
              this.renderUserInfo()
            }
            useLayerForClickAway={true}
            touchTapCloseDelay={5000}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Sign Out" onClick={ () => this.onSignoutClick() }/>
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
    user: state.user,
    activeTab: state.status.activeTab
  }
}

export default connect(mapStateToProps, actions)(Navigation);



