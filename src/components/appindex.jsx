import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import TagList from '../containers/tag_list'
import MixList from '../containers/mix_list'

class AppIndex extends Component {

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

export default AppIndex;
