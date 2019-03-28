import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMixes } from '../actions';
import { filterMixes } from '../actions';

import Mix from './mix'

class MixList extends Component {

  componentDidUpdate(prevProps, prevState) {

  }


  // componentDidMount() {
  //   console.log(this.props.allMixes)
  //   this.props.filterMixes(this.props.allMixes, this.props.selectedTags)
  // }

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
    {filterMixes: filterMixes},
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
