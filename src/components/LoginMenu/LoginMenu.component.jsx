import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

function LoginMenu() {
  return (
    <IconButton
      edge="end"
      aria-label="User profile dropdown"
      aria-haspopup="true"
      color="inherit"
    >
      <Avatar src={null} alt="Avatar" />
    </IconButton>
  );
}

export { LoginMenu };