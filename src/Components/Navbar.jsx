import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Hidden,
  Button,
  Menu as MenuUser,
  MenuItem,
  Fade,
} from '@material-ui/core';
import { Menu, ExitToApp, Person } from '@material-ui/icons';
import UserController from '../Controllers/loginController';
import BackButton from './BackButton';
import '../Styles/Navbar.css';

const NavBar = ({ pageName, goBack }) => {
  const [UserInfo, setUserInfo] = useState({ value: false, user: {} });
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickProfile = () => {
    // eslint-disable-next-line no-underscore-dangle
    history.push(`/user/${UserInfo.user._id}`);
  };

  const handleLogOut = () => {
    history.push('/logout');
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
                  <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <Avatar
                      src={UserInfo.user.imgUsuario}
                      className="border border-primary"
                      style={{ width: '2.4rem', height: '2.4rem' }}
                    />
                  </Button>
                  <MenuUser
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClickProfile}>
                      <Person className="mr-1" />
                      <Typography variant="inherit" className="ml-0">
                        Perfil
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut}>
                      <ExitToApp className="mr-1" />
                      <Typography variant="inherit" className="ml-0">
                        Cerrar Sesión
                      </Typography>
                    </MenuItem>
                  </MenuUser>
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
