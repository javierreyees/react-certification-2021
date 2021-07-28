import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { SearchBar } from '../SearchBar';
import { LoginMenu } from '../LoginMenu';
import { NavSwitch } from '../Switch';
import useStyles from './Navigation.styled';

function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <SearchBar />
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <NavSwitch />
          <LoginMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export { Navigation };