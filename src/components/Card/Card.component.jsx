import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { CardContainer, CardMedia } from './Card.styled';

function Card({ img, title, description, id, }) {
  function handleClick() {
  }

  return (
    <CardContainer key={id} onClick={handleClick}>
      <CardActionArea>
        <CardMedia image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
}

export { Card };