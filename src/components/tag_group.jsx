import React, { Component } from 'react';


class TagGroup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }



  handleClick = () => {

    this.setState({
      open: !this.state.open
    })
  }


  render() {

    let open_toggle_classes = "subtags-list"
    let chevron_toggle_classes = this.state.open ? "fas fa-chevron-up" : "fas fa-chevron-down"
    console.log(this.state.open)
    if (this.state.open) {
      open_toggle_classes += "open"
    }

    return (
      <div className="tag-group">
        <div className="tags-title">
          <p className="margin-right">{this.props.tag_group.name}</p>
          <p onClick={this.handleClick}><i className={chevron_toggle_classes}></i></p>
        </div>
        <div className={open_toggle_classes}>
          {this.props.tag_group.subtags.map((subtag) => <p className="subtag" key={subtag}>{subtag}</p>)}
        </div>
      </div>
    );
  }
}

export default TagGroup;

