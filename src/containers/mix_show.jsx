import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class MixShow extends Component {


  render() {
    return (
      <div className="">
        <h2>{this.props.mix.name}</h2>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const mix = state.mixes.find(p=> p.id === id);
  return { mix };
}



export default connect(mapStateToProps)(MixShow);
