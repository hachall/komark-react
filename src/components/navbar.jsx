import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar-kom">
        <a href="/" className="navbar-brand">
          {/*<img src="images/logo.png" alt="logo"/>*/}
          <p className="navbar-brand-text">Kommunity Archive</p>
        </a>

      <div className="navbar-right hidden-xs hidden-sm">
        <a href="" className="navbar-item navbar-link">Explore</a>
        <a href="" className="navbar-item navbar-link">Shop</a>
        <a href="" className="navbar-item navbar-link">About</a>
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
