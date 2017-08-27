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
            <img className="project-image" alt="" src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20170731%2F70%2F7614960%2F71%2F560x815x120b1f5d186053a0fce3f6a4.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r" />
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
      <div>
        <p>project list</p>
        <ul className="row">
          { this.renderProjects() }
        </ul>
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
