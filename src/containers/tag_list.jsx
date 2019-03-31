import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTags } from '../actions';

import TagGroup from './tag_group'

class TagList extends Component {


  componentWillMount() {
    this.props.setTags();
    // jQuery(".left-side").wrap("<div class='left-placeholder'></div>");
    // jQuery(".left-placeholder").width(jQuery(".left-side").outerWidth());
  }

  render() {
    return (
      <div className="tag-list">
        <div className="tag-column">
          {this.props.tags[0].map((tag_group) => <TagGroup tag_group={tag_group} key={tag_group.name}/>)}
        </div>
        <div className="tag-column">
          {this.props.tags[1].map((tag_group) => <TagGroup tag_group={tag_group} key={tag_group.name}/>)}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setTags: setTags},
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    tags: state.tags
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);

