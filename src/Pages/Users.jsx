/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  Fab,
  Backdrop,
  Fade,
  Modal,
  Button,
  Grid,
  CircularProgress,
  Divider,
  Tooltip,
  Icon,
} from '@material-ui/core';
import Helmet from 'react-helmet';
import Alert from '@material-ui/lab/Alert';
import UserListItem from '../Components/UserListItem';
import UserControler from '../Controllers/UsersController';
import RegisterForm from '../Components/RegisterForm';
import NavBar from '../Components/Navbar';

const Users = () => {
  const [Open, setOpen] = useState(false);
  const [Check, setCheck] = useState(false);
  const [Data, setData] = useState({ users: [], loading: true, value: false });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setTime = () => {
    setTimeout(() => {
      setCheck(false);
    }, 5000);
  };

  const getUsersList = async (register = false) => {
    const user = new UserControler();
    const users = await user.getUsers();
    if (!users.err) {
      setData({
        users: users.items,
        value: true,
        loading: false,
      });
      if (register) {
        handleClose();
        setCheck(true);
        setTime();
      }
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #694bb6' }} />
      <NavBar pageName="La Puntada - Usuarios" goBack />
      <Divider className="bg-success0" />
      <div className="d-flex mt-3">
        {Data.loading && <CircularProgress className="mx-auto" size={50} color="secondary" />}
        {Check && (
          <Alert severity="success" className="mx-auto text-success">
            Usuario agregado
          </Alert>
        )}
      </div>
      <Tooltip title="Add" aria-label="add">
        <Fab
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            marginRight: '0.4rem',
            marginBottom: '0.7rem',
          }}
          variant="round"
          color="default"
          aria-label="add"
          onClick={handleOpen}
        >
          <Icon className="fas fa-user-plus" style={{ width: '2rem' }} />
        </Fab>
      </Tooltip>
      <Grid container alignItems="center">
        {Data.users.map((user) => (
          <UserListItem
            key={user._id}
            idUser={user._id}
            rol={user.rol}
            nombres={user.nombres}
            apellido={user.apellidos}
            imgUsuario={user.imgUsuario}
            estado={user.estado}
          />
        ))}
      </Grid>
      <Modal
        style={{ position: 'absolute' }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock="false"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Open}>
          <div className="border border-dark" id="transition-modal-title">
            <div className="container">
              <div className="">
                <RegisterForm getUsersList={getUsersList} />
              </div>
              <div className="bg-white pb-3 d-flex content-align-center">
                <Button
                  className="mx-4 btn-block"
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Users;
