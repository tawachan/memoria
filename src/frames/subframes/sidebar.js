import React, { Component } from 'react';

import ProjectList from '../../components/shared/project_list';
import Profile from '../../components/shared/profile'

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <Profile />
        <ProjectList />
      </div>
    )
  }
}
export default Sidebar;
