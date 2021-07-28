import React from 'react';
import Grid from '@material-ui/core/Grid';

import { mockVideosData } from '../../mock/youtube-videos-mock';
import { VideoCardList } from '../../components/VideoCards';
import { TypographyTitle } from './Home.styled';

function HomePage() {

  function transformProps(items) {
    return items.map(item => ({
      id: item.id.channelId,
      title: item.snippet.title,
      description: item.snippet.description,
      image: item.snippet.thumbnails.high.url,
    })).filter(item => item.description !== '');
  }

  return (
    <section>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TypographyTitle variant="h2">
            Welcome to the Challenge!</TypographyTitle>
        </Grid>

        <Grid item xs={12}>
          <VideoCardList videos={transformProps(mockVideosData.items)} />
        </Grid>
      </Grid>

    </section >
  );
}

export { HomePage };
