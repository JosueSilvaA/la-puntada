import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Hidden } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Menu } from '@material-ui/icons';
import UserController from '../Controllers/loginController';
import BackButton from './BackButton';

const NavBar = ({ pageName, goBack }) => {
  const [UserInfo, setUserInfo] = useState({ value: false, user: {} });

  const decodeToken = async () => {
    const user = new UserController();
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwidXNlciI6IlNpbHZhIiwiaWQiOiI1ZjBjZDM0OTUzZWIwZTM1ZTg1N2UzZTYiLCJyb2wiOiI1ZjBjZDMwYjQwZmJkNDJmYjAyNzg4OTEiLCJpYXQiOjE1OTU3OTA3MTcsImV4cCI6MTU5NTg3NzExN30.h-C1kdwITY7Eetq23yanj2Gh1zdYw0DaXKhFYfGJMyI';
    const tokenDecoded = jwtDecode(token);
    const dataUser = await user.GetInfoUser(tokenDecoded.id);
    setUserInfo({ value: true, user: dataUser.item });
    /* Ya tienes la información del usuario en el estado */
  };
  useEffect(() => {
    decodeToken();
  }, []);
  return (
    <>
      <div>
        <AppBar position="static" className="pl-0">
          <Toolbar>
            <Hidden only={['sl', 'lg', 'md']}>{goBack && <BackButton />}</Hidden>
            <Typography style={{ width: '60%' }}>{pageName}</Typography>

            <div className="d-flex justify-content-end align-items-center" style={{ width: '40%' }}>
              <div style={{ textAlign: 'right' }}>{UserInfo.user.usuario}</div>
              <Avatar
                src={UserInfo.user.imgUsuario}
                className="border border-danger ml-2"
                style={{ width: '2.4rem', height: '2.4rem' }}
              />

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
