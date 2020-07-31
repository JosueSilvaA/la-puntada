import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Menu } from '@material-ui/icons';
import BackButton from './BackButton';

const NavBar = ({ pageName, goBack }) => {
  return (
    <>
      <div>
        <AppBar position="static" className="pl-0">
          <Toolbar>
            {goBack && <BackButton />}
            <Typography>{pageName}</Typography>
            <div className="ml-auto">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
