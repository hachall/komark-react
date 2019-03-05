import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value)
  }



  render() {
    return (
      <div className="mix-search">
        <input
        value={this.state.term}
        type="text"
        id="mix-search-input"
        spellCheck="false"
        className="form-search form-control"
        onChange={this.handleChange}/>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
