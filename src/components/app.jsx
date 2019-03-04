import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeIndex from '../components/homeindex';
import HomeTop from '../components/hometop';
import MixPlayer from '../containers/mix_player';

class App extends Component {


  render() {
    return (
      <div className="app">
        <HomeTop />
        <HomeIndex />
        <MixPlayer />
      </div>
    );
  }
}



export default App;
