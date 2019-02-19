import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

class Mix extends Component {

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
            {this.props.mix.tags.map((tag) => <div className="mix-tag" key={tag}>{tag}</div>)}
          </div>
        </div>
      </div>
  )}
}

export default Mix;
