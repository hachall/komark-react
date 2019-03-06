import React, { Component } from 'react';

import NavBar from './navbar'
import HomeCarousel from '../containers/home_carousel'



class HomeTop extends Component {



  render() {
    return (
      <div className="home-top">
        <NavBar />
        <HomeCarousel />
      </div>
    );
  }
}



export default HomeTop;
