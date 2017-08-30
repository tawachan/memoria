import React, { Component } from 'react';
import Header from './header';
import Main from './main';

class Content extends Component {

  render() {
    return (
      <div className="content">
        <Header />
        <Main />
      </div>
    )
  }
}
export default Content;
