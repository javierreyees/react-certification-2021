/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './SearchBar.styled';

const INPUT_PROPS = { 'aria-label': 'search' };

function SearchBar() {
  const classes = useStyles();

  const inputBaseClasses = {
    root: classes.inputRoot,
    input: classes.inputInput,
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={inputBaseClasses}
        inputProps={INPUT_PROPS}
      />
    </div>
  );
}

export { SearchBar };