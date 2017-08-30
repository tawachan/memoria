import React, { Component } from 'react';

import ProjectList from '../../components/shared/project_list';
import Profile from '../../components/shared/profile'
import {SideNav, SideNavItem, Button } from 'react-materialize';

class Sidebar extends Component {

  render() {
    return (
      <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
          user={{
            background: 'img/office.jpg',
            image: 'img/yuna.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>
    )
  }
}
export default Sidebar;
