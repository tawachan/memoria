import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Make from '../components/make/make';
import Navigation from './navigation';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import SwipeableViews from 'react-swipeable-views';

import MakeIcon from 'react-material-icons/icons/action/schedule';
import KeepIcon from 'react-material-icons/icons/hardware/memory';
import ShareIcon from 'react-material-icons/icons/social/share';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  tab: {
    background: '#32936f'
  }
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
        <Tabs
          onChange={this.onTabChange}
          value={this.props.activeTab}
          tabItemContainerStyle={styles.tab}
        >
          <Tab icon={<MakeIcon />} label="Make" value={0} />
          <Tab icon={<KeepIcon />} label="Keep" value={1} />
          <Tab icon={<ShareIcon />} label="Share" value={2} />
        </Tabs>

        <Navigation />
        <SwipeableViews
          index={this.props.activeTab}
          onChangeIndex={this.onTabChange}
        >
          <div>
            <Make />
          </div>
          <div style={styles.slide}>
            this is keep
          </div>
          <div style={styles.slide}>
            this is share
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
