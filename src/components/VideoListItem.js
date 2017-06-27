import React from 'react';
import styled, { injectGlobal, keyframes, ThemeProvider } from 'styled-components';

const VideoListItem = ({ video, onVideoSelect }) => {

  const ListItem = styled.li`
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 15px;
    transition: background 300ms;

    &:last-of-type {
      border: none;
    }

    &:hover {
      background: rgba(0,0,0,.12);
    }
  `;

  const Thumbnail = styled.div`
    display: table-cell;
  `;

  const ThumbDesc = styled.div`
    display: table-cell;
    vertical-align: top;
    padding-left: 10px;
  `;

  return (
    <ListItem onClick={() => onVideoSelect(video)}>

      <Thumbnail>
        <img src={video.snippet.thumbnails.default.url} />
      </Thumbnail>

      <ThumbDesc>
        {video.snippet.title}
      </ThumbDesc>

    </ListItem>
  );
};

export default VideoListItem;