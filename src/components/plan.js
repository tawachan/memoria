import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';


class Plan extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return(
      _.map(this.props.projects, project => {
        return(
          <li key={project.id}>{ project.name }</li>
        )
      })
    )
  }

  render() {
    return (
      <div>
        this is main page
        { this.renderProjects() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps, actions)(Plan)
