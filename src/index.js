import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal, keyframes, ThemeProvider } from 'styled-components';
import normalizeStyled from 'normalize-styled';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD1Hn5C-AiW6Oo93N8gMf2o8ln_4bDRu4o';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// import Button from './components/Button';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('arapske pare');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const theme = {
      bg: '#000',
      fg: 'white'
    };

    const invertTheme = ({ fg, bg }) => ({
      fg: bg,
      bg: fg
    });

    injectGlobal`
      ${normalizeStyled}

      body {
        font-family: 'Avenir Next';
        background: #eee;
      }
    `

    const Header = styled.div`
      display: block;
      width: 100%;
      background: ${props => props.theme.bg};
      box-shadow: 0px 0px 3px rgba(0,0,0, .3);
      padding: 15px;
    `;

    const Title = styled.h1`
      font-size: 20px;
      text-align: center;
      color: #333;
      animation: ${keyframes`from { opacity: 0; }`} 1s both;
      margin: 0;
    `;

    const Block = styled.div`
      display: table;
      position: relative;
      width: 100%;
      table-layout: fixed;
      overflow: visible;
    `;

    const Col = styled.div`
      display: table-cell;
      height: 100%;
      vertical-align: top;
      width: auto;
      padding: 15px;

      @media (max-width: 1000px) {
        display: block;
      }
    `;

    const Column = Col.withComponent('div');

    const Col1 = Column.extend`
      width 8.333333%;
    `;
    const Col2 = Column.extend`
      width 16.666667%;
    `;
    const Col3 = Column.extend`
      width 25%;
    `;
    const Col4 = Column.extend`
      width: 33.333333%;
    `;
    const Col5 = Column.extend`
      width 41.666667%;
    `;
    const Col6 = Column.extend`
      width 50%;
    `;
    const Col7 = Column.extend`
      width 58.333333%;
    `;
    const Col8 = Column.extend`
      width 66.666667%;
    `;
    const Col9 = Column.extend`
      width 75%;
    `;
    const Col10 = Column.extend`
      width 83.333333%;
    `;
    const Col11 = Column.extend`
      width 91.666667%;
    `;
    const Col12 = Column.extend`
      width 100%;
    `;

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <ThemeProvider theme={theme}>

        <div>
        
          <Header>
            <SearchBar onSearchTermChange={videoSearch} />
          </Header>

          <Block>
            <Col8>
              <VideoDetail video={this.state.selectedVideo} />
            </Col8>

            <Col4>
              <VideoList 
                videos={this.state.videos}
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
            </Col4>

          </Block>
        
        </div>
        
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));