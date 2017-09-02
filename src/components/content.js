import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Make from '../components/make/make';
import Navigation from './navigation';

import SwipeableViews from 'react-swipeable-views';


const styles = {
  slide: {
    padding: 10,
  },
};

class Content extends Component {

  componentDidMount() {
    this.props.changeTab(parseInt(localStorage.getItem('active-tab')) || 0);
  }

  onTabChange = (value) => {
    this.props.changeTab(value)
  };

  render() {

    return (
      <div className="content">
        <Navigation />
        <SwipeableViews
          index={this.props.activeTab}
          onChangeIndex={this.onTabChange}
        >
          <div style={styles.slide}>
            <Make />
          </div>
          <div style={styles.slide}>
            this is keep
          </div>
          <div style={styles.slide}>
            this is share
          </div>
          <div style={styles.slide}>
            this is settings
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.status.activeTab
  }
}

export default connect(mapStateToProps, actions)(Content);
