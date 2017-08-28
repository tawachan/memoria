import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import _ from 'lodash';

class ProjectList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return(
      _.map(this.props.projects, project => {
        return(
          <li className="project-card" key={project.id}>
            <img className="project-image" alt="" src="https://s-media-cache-ak0.pinimg.com/originals/9d/cf/7e/9dcf7e9e2e5bdc4e90dfe6a070691868.jpg" />
            <div className="project-name">
              <small className="font-white">{project.name}</small>
            </div>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <div className="project-list">
        <p>project list</p>
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
export default connect(mapStateToProps, actions)(ProjectList)
