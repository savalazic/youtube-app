import React, { Component } from 'react';
import styled, { injectGlobal, keyframes, ThemeProvider } from 'styled-components';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {

    return (
      <div>
        <input 
          type='text'
          placeholder='Search...'
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;