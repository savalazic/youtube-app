import React from 'react';
import styled, { injectGlobal, keyframes, ThemeProvider } from 'styled-components';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0,0,0,.2);
  `

  return (
    <List>
      {videos.map(video => 
        <VideoListItem 
          key={video.etag} 
          video={video}
          onVideoSelect={onVideoSelect} /> 
      )}
    </List>
  );
};

export default VideoList;