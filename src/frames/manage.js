import React, { Component } from 'react';

import Sidebar from './subframes/sidebar';
import Content from './subframes/content';

class Manage extends Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <Content />
      </div>
    )
  }
}
export default Manage
