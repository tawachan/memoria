import React, { Component } from 'react';
import Header from '../components/header'
import Content from '../components/content';
import Sidebar from '../components/sidebar'
import { RaisedButton } from 'material-ui';

class Manage extends Component {
  render() {
    return (
      <div className="manage">
        <Header />
        <Sidebar />
        <Content />
      </div>
    )
  }
}
export default Manage
