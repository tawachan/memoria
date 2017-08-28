import React, { Component } from 'react';
import TodoList from './make/todo_list'
import { Row, Col, Grid } from 'react-bootstrap';

class Make extends Component {

  render() {
    return (
      <div className="make">
        <Grid fluid>
          <Row className="show-grid">
            <Col md={6} mdPush={6}><TodoList /></Col>
            <Col md={6} mdPull={6}><TodoList /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Make;
