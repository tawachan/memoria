import React, { Component } from 'react';
import Make from '../../components/make';
import { Tab, Tabs } from 'react-bootstrap';

class Main extends Component {

  onTabClick(key) {
    localStorage.setItem('selected_tab', key);
  }


  render() {
    return (
      <div className="main">
        <Tabs defaultActiveKey={localStorage.getItem('selected_tab') || 'make'} animation={true} id="work-field" onSelect={ (key, event) => { this.onTabClick(key) } }>
          <Tab eventKey="make" title="MAKE" animation={true}><Make /></Tab>
          <Tab eventKey="keep" title="KEEP" animation={true}>NOT YET></Tab>
          <Tab eventKey="others" title="OTHERS" animation={true}>NOT IMPLEMENTED YET</Tab>
        </Tabs>

      </div>
    )
  }
}
export default Main;
