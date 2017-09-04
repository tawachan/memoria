import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';
import { GridList, GridTile, FlatButton } from 'material-ui';
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
    overflowX: 'hidden',
    paddingTop: 10
  },
  gridTile: {
    margin: 10
  },
  button: {
    fontSize: '10%',
    marginLeft: '70px',
  },
};

class ProjectList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
    if (localStorage.getItem('active-project') !== 'undefined') {
      this.props.fetchProject(parseInt(localStorage.getItem('active-project')));
    }
  }

  onProjectClick(id) {
    this.props.fetchProject(id);
    this.props.changeSidebar(false);
  }

  onProjectNewClick() {
    this.props.switchProjectNewModal(true);
  }

  renderProjects() {
    return(
      _.map(this.props.projects, project => {
        return(
          <GridTile
            key={project.id}
            title={<div onClick={() => {this.onProjectClick(project.id)}}>{ project.name }</div>}
            subtitle={<span>{project.description}</span>}
            actionIcon={<IconButton></IconButton>}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={2}
            style={styles.gridTile}
          >
            <img  onClick={() => {this.onProjectClick(project.id)}} alt={'later'} src='http://www.fivestar-club.jp/fscdir/photolib/indonesia19/indonesia0368.jpg' />
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
        <Subheader>Your Project<FlatButton primary={true} label="NEW Project" onClick={() => this.onProjectNewClick() } style={styles.button} /></Subheader>
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
