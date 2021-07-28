import React from 'react';
import { Card } from '../Card';
import VideoWrapper from './VideoCards.styled';

function VideoCardList({ videos }) {

  return (
    <VideoWrapper>
      {videos.map((video) => (
        <Card
          key={video.id}
          img={video.image}
          title={video.title}
          description={video.description}
        />
      ))}
    </VideoWrapper>
  );
}

export { VideoCardList };