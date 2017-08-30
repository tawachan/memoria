import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import * as actions from '../../actions/index';
import _ from 'lodash';

class ProjectList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  onProjectClick(id) {
    this.props.fetchProject(id);
  }

  renderProjects() {
    return(
      _.map(this.props.projects, project => {
        return(


          <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
            title="Card Title"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
          </Card>
          // <li className="project-card" key={project.id} onClick={ () => this.onProjectClick(project.id) }>
          //   <img className="project-image" alt="" src="" />
          //   <div className="project-name">
          //     <small className="font-white">{project.name}</small>
          //   </div>
          // </li>
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
  console.log(state)
  return {
    projects: state.projects.list
  }
}
export default connect(mapStateToProps, actions)(ProjectList)
