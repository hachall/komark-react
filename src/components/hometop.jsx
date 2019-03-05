import React, { Component } from 'react';

import NavBar from './navbar'
import Carousel from '../containers/carousel'



class HomeTop extends Component {



  render() {
    return (
      <div className="home-top">
        <NavBar />
        <Carousel />
      </div>
    );
  }
}



export default HomeTop;
