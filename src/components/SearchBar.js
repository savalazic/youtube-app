import React, { Component } from 'react';

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
      <form>
        <input 
          type='text'
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
        <p>{this.state.search}</p>
      </form>
    );
  }
}

export default SearchBar;