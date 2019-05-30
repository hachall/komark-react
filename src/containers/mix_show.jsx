import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMix } from '../actions';


class MixShow extends Component {

  componentWillMount() {

    if (!this.props.mix) {
      this.props.fetchMix(this.props.match.params.id)
    }


  }

  // componentDidMount() {
  //   this.props.fetchMix(this.props.match.params.id)
  // }


  render() {
    if (!this.props.mix) {
      return <p>Loading...</p>;
    }
    return (
      <div className="">
        <h2>{this.props.mix.name}</h2>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMix}, dispatch);
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const mix = state.allMixes.find(p=> p.id === id);
  return { mix };
}



export default connect(mapStateToProps, mapDispatchToProps)(MixShow);
