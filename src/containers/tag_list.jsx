import React, { Component } from 'react';

import TagGroup from '../components/tag_group'

class TagList extends Component {

  static defaultProps = {
    tag_groups: [
      {"name": "Hip-Hop",
      "subtags": ['Trap', 'Gangsta', 'Boom Bap', 'Dirty South']},
      {"name": "UK",
      "subtags": ['Grime', 'Garage', 'Drum & Bass', 'Dubstep']}
    ]
  }

  render() {
    return (
      <div className="tag-list">
        {this.props.tag_groups.map((tag_group) => <TagGroup tag_group={tag_group} key={tag_group.name}/>)}
      </div>
    );
  }
}

export default TagList;

