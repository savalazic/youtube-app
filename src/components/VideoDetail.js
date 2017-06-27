import React from 'react';
import styled, { injectGlobal, keyframes, ThemeProvider } from 'styled-components';

const VideoDetail = ({ video }) => {

  const Description = styled.div`
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0,0,0,.2);
    padding: 15px;
    margin-top: 10px;
  `;

  const Title = styled.h1`
    padding: 0;
    margin: 0 0 10px 0;
  `;

  const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  const IframeContainer = styled.div`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
  `;

  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <IframeContainer>
        <Iframe frameBorder={0} src={url}></Iframe>
      </IframeContainer>
      <Description>
        <Title>{video.snippet.title}</Title>
        <div>{video.snippet.description}</div>
      </Description>
    </div>
  );
};

export default VideoDetail;