import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const NavBar = () => {
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>
                        */}
            <Typography>La Puntada</Typography>
            <div className="ml-auto">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
