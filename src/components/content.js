import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Make from '../components/make/make';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import SwipeableViews from 'react-swipeable-views';


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
          <Tab label="Make" value={0} />
          <Tab label="Keep" value={1} />
          <Tab label="Share" value={2} />
        </Tabs>
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
