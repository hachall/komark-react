import React, { Component } from 'react';

class Carousel extends Component {

  render() {
    const style = {
      backgroundImage: "url('/assets/images/lifex.jpeg')"
    }

    return (
      <div style={style} className="home-carousel"></div>
    );
  }
}



export default Carousel;
