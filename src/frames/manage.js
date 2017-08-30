import React, { Component } from 'react';
import Content from '../components/content';
import Sidebar from '../components/sidebar';

class Manage extends Component {
  render() {
    return (
      <div className="manage">
        <Sidebar />
        <Content />
      </div>
    )
  }
}
export default Manage
