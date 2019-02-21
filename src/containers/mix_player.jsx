import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




class MixPlayer extends Component {


  render() {

    let avatar = "https://djbooth.net/.image/t_share/MTUzNDg1OTkyMjgzNDgxMjg2/image-placeholder-title.jpg";

    let playing = false;
    let playButton = (playing) ? 'play-pause-btn-paused' : 'play-pause-btn';

    let percentage = "30%"

    let muted = false
    let muteButton = (muted) ? 'mute-volume-btn-muted' : 'mute-volume-btn';

    return (
      <div id="mix-player-bar">
        <div id="mix-player-container">
          <div className="mp-track-info">
            <img src={avatar} className="track-bar-avatar"alt=""/>
            <div className="track-details">
              <p className="track-bar-artist">MF DOOM</p>
              <p className="track-bar-track">Operation: Doomsday</p>
            </div>
          </div>
          <div className="mp-track-controls">
            <div id='previous-btn' className='controller-btn non-active-btn'></div>
            <div id={playButton} className='controller-btn' onClick={console.log('play clicked')}></div>
            <div id='next-btn' className='controller-btn non-active-btn' ></div>
            </div>
          <div id='tp-progress'>
            <div id='tp-timepassed'>{"03:21"}</div>
            <div id='tp-scrubbar'>
              <div id='scrub-bg'></div>
              <div id='scrub-progress' style={{width: percentage}}></div>
              <div id='scrup-handle'></div>
            </div>
            <div id='tp-duration'>{"11:11"}</div>
          </div>
          <div className="mp-bar-controls">
            <div id={muteButton} className='controller-btn' onClick={console.log("mute clicked")}></div>
            <div id="bar-close-btn" className=' controller-btn' onClick={console.log("close clicked")}></div>
          </div>
        </div>
      </div>
    );
  }
}





function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch
  );
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MixPlayer);

