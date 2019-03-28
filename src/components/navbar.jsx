import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    const style = {
      backgroundImage: `url('assets/images/LogoFinal.jpg')`
    }

    return (
      <div className="navbar-kom">

      <div className="navbar-item navbar-link">
        <div className="nav-logo" >
          <img src="assets/images/LogoFinal.jpg" alt=""/>
        </div>
        {/*<div className="navbar-boxes">
          <p id="navbar-brand" className="navbar-brand-text">Kommunity Archive</p>
        </div>*/}
      </div>


      <div className="navbar-right hidden-xs hidden-sm">
          <a href="#index-anchor" className="navbar-item navbar-link">
            <div className="navbar-boxes">
              Explore
            </div>
          </a>
          <a href="" className="navbar-item navbar-link">
            <div className="navbar-boxes">
              Events
            </div>
          </a>
          <a href="" className="navbar-item navbar-link">
            <div className="navbar-boxes">
              Shop
            </div>
          </a>
          <a href="" className="navbar-item navbar-link">
            <div className="navbar-boxes">
              About
            </div>
          </a>
      </div>

      <div className="navbar-item hidden-md hidden-lg">
          <div className="dropdown">
            <i className="fas fa-bars dropdown-toggle" data-toggle="dropdown" role="button"></i>
            <ul className="dropdown-menu dropdown-menu-right navbar-dropdown-menu">
              <li><a href="#">Explore</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}



export default NavBar;
