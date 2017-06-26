import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD1Hn5C-AiW6Oo93N8gMf2o8ln_4bDRu4o';

import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));