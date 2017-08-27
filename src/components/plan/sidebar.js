import React, { Component } from 'react';

import ProjectList from './project_list';

class Sidebar extends Component {

  render() {
    return (
      <div className="plan-sidebar">
        <div className="container full-size">
          <ProjectList />
        </div>
      </div>
    )
  }
}
export default Sidebar;
