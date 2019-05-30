import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMixes } from '../actions';
import { filterMixes } from '../actions';
import { fetchMix } from '../actions';

import Mix from './mix'

class MixList extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div id="mix-row" className="row">
          {this.props.mixes.map((mix) => <Mix mix={mix} key={mix.name}/>)}
        </div>
      </div>
  )}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      filterMixes: filterMixes,
      fetchMix: fetchMix
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    mixes: state.mixes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MixList);
// export default MixList;
