import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTag } from '../actions';
import { filterMixes } from '../actions';


class TagGroup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleOpen = (event) => {
    this.setState({
      open: !this.state.open
    })
  }

  handleClick = (event) => {
    this.props.selectTag(event.target.innerText)
  }

  checkSelectionInGroup = () => {
    if (this.props.selectedTags === []) {
      return false
    }
    let wholeGroup = [].concat(this.props.tag_group.subtags)
    // wholeGroup.push(this.props.tag_group.name)
    let intersection = this.props.selectedTags.filter(x => wholeGroup.includes(x))
    return !(intersection.length === 0)
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.filterMixes(this.props.allMixes, this.props.selectedTags)


    if ((this.checkSelectionInGroup()) && (!this.state.open)){
      this.toggleOpen()
    }
  }


  render() {

    let open_toggle_classes = "subtags-list"
    let chevron_toggle_classes = this.state.open ? "fas fa-chevron-up hover-highlight" : "fas fa-chevron-down hover-highlight"
    if (this.state.open) {
      open_toggle_classes += "open"
    }

    let classesTitleTag = (tag) => {
      if (this.props.selectedTags.includes(tag)) {
        return "margin-right hover-highlight selected"
      } else {
        return "margin-right hover-highlight"
      }
    }

    let classesSubTag = (tag) => {
      if (this.props.selectedTags.includes(tag)) {
        return "subtag hover-highlight selected"
      } else {
        return "subtag hover-highlight"
      }
    }

    let disableClose = ((this.checkSelectionInGroup()) && (this.state.open))



    return (
      <div className="tag-group">
        <div className="tags-title ">
          <div onClick={this.handleClick}>
            <p className={classesTitleTag(this.props.tag_group.name)}>{this.props.tag_group.name}</p>
          </div>
          {
            disableClose
            ? <p><i className={chevron_toggle_classes + " disabled"}></i></p>
            : <p onClick={this.toggleOpen}><i className={chevron_toggle_classes}></i></p>
          }
        </div>
        <div className={open_toggle_classes}>
            {this.props.tag_group.subtags.map((subtag) => <div key={subtag} onClick={this.handleClick}><p className={classesSubTag(subtag)} >{subtag}</p></div>)}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {selectTag: selectTag, filterMixes: filterMixes},
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedTags: state.selectedTags,
    allMixes: state.allMixes
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TagGroup);

