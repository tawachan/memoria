import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  gridTile: {
    margin: 10
  }
};

class ProjectList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
    if (localStorage.getItem('active-project') != '') {
      this.props.fetchProject(parseInt(localStorage.getItem('active-project')));
    }
  }

  onProjectClick(id) {
    this.props.fetchProject(id);
  }

  renderProjects() {
    return(
      _.map(this.props.projects, project => {
        return(
          <GridTile
            key={project.id}
            title={<div onClick={() => {this.onProjectClick(project.id)}}>{ project.name }</div>}
            subtitle={<span>here is for status of project</span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={2}
            style={styles.gridTile}
          >
            <img  onClick={() => {this.onProjectClick(project.id)}} src='http://www.fivestar-club.jp/fscdir/photolib/indonesia19/indonesia0368.jpg' />
          </GridTile>
        )
      })
    )
  }

  render() {
    return (
      <GridList
        style={styles.gridList}
      >
        <Subheader>Project</Subheader>
        { this.renderProjects() }
      </GridList>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps, actions)(ProjectList)
