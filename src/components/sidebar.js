import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';
import ProjectList from './project_list';

class Header extends Component {

  render() {
    return (
      <Drawer
        open={false}
        width={250}
      >
        <ProjectList />
      </Drawer>
    )
  }
}

export default Header;


