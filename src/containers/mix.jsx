import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinesEllipsis from 'react-lines-ellipsis';
import { selectTag } from '../actions'

class Mix extends Component {

  handleClick = (event) => {
    this.props.selectTag(event.currentTarget.innerText)
  }

  render() {
    const img_style = {
      backgroundImage: `url(${this.props.mix.image_url})`
    }

    const dateString = `${this.props.mix.date}`


    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="mix" style={img_style}>
          <div className="play-section" >
            <i className="far fa-play-circle"></i>
          </div>
          <div>
          <div className="info-section">
            <div className="details">
              <p className="artist no-m-btm">{this.props.mix.artist}</p>
              <p className="mixname no-m-btm">{this.props.mix.name}</p>
              <p className="date no-m-btm">{dateString}</p>
            </div>
            <div className="description2">
              <LinesEllipsis
                text={this.props.mix.description}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='words'
              />
            </div>
          </div>
          <div className="tags-section">
            {this.props.mix.tags.map((tag) => {
                let classes = "mix-tag"
                if (this.props.selectedTags.includes(tag)) {
                  classes += " mix-tag-selected"
                }
              return (
                <div className={classes} onClick={this.handleClick}key={tag}>{tag}</div>
              )
            })}
          </div>
          </div>
        </div>
      </div>
  )}
}

function mapStateToProps(state) {
  return {
    selectedTags: state.selectedTags
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {selectTag: selectTag},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Mix);
