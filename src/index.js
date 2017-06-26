import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD1Hn5C-AiW6Oo93N8gMf2o8ln_4bDRu4o';

import SearchBar from './components/SearchBar'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'arapi' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));