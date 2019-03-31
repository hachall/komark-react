import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  loadjs  from 'loadjs';


import HomeIndex from '../components/homeindex';
import HomeTop from '../components/hometop';
import MixPlayer from '../containers/mix_player';

class Home extends Component {

  componentWillMount() {
    loadjs('assets/js/stick_script.js', function() {
  /* foo.js loaded */
    });
  }


  render() {
    return (
      <div className="app">
        <HomeTop />
        <HomeIndex />
      </div>
    );
  }
}



export default Home;
