import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function NavSwitch() {

  return (
    <FormControlLabel
      control={
        <Switch
          name="darkMode"
          inputProps={{ 'aria-label': 'theme switch' }}
        />
      }
      label="Dark mode"
    />
  );
}

export { NavSwitch };