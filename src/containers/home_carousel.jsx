import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



class HomeCarousel extends Component {


  render() {

    return (
      <img className="home-carousel" src="assets/images/lifex.jpeg" alt=""/>
    );
  }
}



export default HomeCarousel;
