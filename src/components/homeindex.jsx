import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMixes } from '../actions';

import SearchBar from '../containers/search_bar'
import TagList from '../containers/tag_list'
import MixList from '../containers/mix_list'

class HomeIndex extends Component {

  componentWillMount() {
    this.props.setMixes();
  }

  render() {
    return (
      <div className="index-section">
        <div className="left-side">
          <div className="search-section">
            <SearchBar />
            <TagList />
          </div>
        </div>
        <div className="right-side">
          <MixList />
        </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setMixes: setMixes},
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(HomeIndex);
