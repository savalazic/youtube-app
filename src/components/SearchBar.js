import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          name='search'
          value={this.state.search}
          onChange={this.onInputChange} />
        <p>{this.state.search}</p>
      </form>
    );
  }
}

export default SearchBar;