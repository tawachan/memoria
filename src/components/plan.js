import React, { Component } from 'react';

import Sidebar from './plan/sidebar';
import Content from './plan/content';

class Plan extends Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <Content />
      </div>
    )
  }
}
export default Plan
