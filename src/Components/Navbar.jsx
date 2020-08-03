import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Hidden } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import UserController from '../Controllers/loginController';
import BackButton from './BackButton';
import '../Styles/Navbar.css';

const NavBar = ({ pageName, goBack }) => {
  const [UserInfo, setUserInfo] = useState({ value: false, user: {} });

  const decodeToken = async () => {
    const user = new UserController();
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = window.sessionStorage.getItem('userToken');
    }
    if (token !== null) {
      const tokenDecoded = jwtDecode(token);
      const dataUser = await user.GetInfoUser(tokenDecoded.id);
      if (!dataUser.err) {
        setUserInfo({ value: true, user: dataUser.item });
      }
    }
    /* Ya tienes la información del usuario en el estado */
  };
  useEffect(() => {
    decodeToken();
  }, []);
  return (
    <>
      <div>
        <AppBar position="static" className="pl-0" style={{ background: '#24a19c' }}>
          <Toolbar>
            <Hidden only={['sl', 'lg', 'md']}>{goBack && <BackButton />}</Hidden>
            <p className="logo" style={{ width: '60%' }}>
              {pageName}
            </p>

            <div
              className="d-flex justify-content-end align-items-center usuario"
              style={{ width: '40%' }}
            >
              {UserInfo.value && (
                <>
                  <div style={{ textAlign: 'right' }}>{UserInfo.user.usuario}</div>
                  <Avatar
                    src={UserInfo.user.imgUsuario}
                    className="border border-primary ml-2"
                    style={{ width: '2.4rem', height: '2.4rem' }}
                  />
                </>
              )}

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
