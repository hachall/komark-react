import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMixes } from '../actions';

import SearchBar from '../containers/search_bar'
import TagList from '../containers/tag_list'
import MixList from '../containers/mix_list'
import Footer from '../components/footer'

class HomeIndex extends Component {

  componentWillMount() {
    this.props.setMixes();
    jQuery(document).ready(function() {

      // var navOffset = jQuery(".left-side").offset().top + 30;
      var navOffset = jQuery(".index-section").offset().top + 30;

      jQuery(".left-side").wrap("<div class='left-placeholder'></div>");
      jQuery(".left-placeholder").width(jQuery(".left-side").outerWidth());
      // jQuery(".left-placeholder").height(jQuery(".left-side").outerHeight());

      jQuery(window).scroll(function() {
        var scrollPos =jQuery(window).scrollTop();
        if ((scrollPos + 30) >= navOffset) {
          jQuery(".left-side").addClass("fixed")
        } else {
          jQuery(".left-side").removeClass("fixed")
        }

      });


    });

  }

  // componentWillUnmount() {
  //   jQuery(window).detach();
  // }

  render() {
    return (
      <div>
        <div id="index-anchor" className="index-section">
          <div className="left-placeholder">

            <div className="left-side">
              <div className="search-section">
                <SearchBar />
                <TagList />
              </div>
            </div>
          </div>
          <div className="right-side">
            <MixList />
          </div>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setMixes: setMixes},
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(HomeIndex);
