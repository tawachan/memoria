import React, { Component } from 'react';
import Make from '../../components/make';
import { Tab, Tabs } from 'react-bootstrap';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <Tabs defaultActiveKey="make" animation={true} id="work-field">
          <Tab eventKey="make" title="MAKE"><Make /></Tab>
          <Tab eventKey="keep" title="KEEP">NOT YET></Tab>
          <Tab eventKey="others" title="OTHERS">NOT IMPLEMENTED YET</Tab>
        </Tabs>

      </div>
    )
  }
}
export default Main;
