import React, { useState } from 'react';
import { Fab, TextField, Backdrop, Fade, Modal, Button } from '@material-ui/core';
import UserListItem from '../Components/UserListItem';

const Users = () => {
  const [Open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputStyles = {
    width: '100%',
  };

  return (
    <>
      <div className=" mt-2 border border-danger">
        <span className="h2">Empleados</span>
      </div>
      <Fab
        style={{ position: 'fixed', bottom: '0', right: '0' }}
        variant="round"
        color="secondary"
        aria-label="add"
        // href="/main"
        onClick={handleOpen}
      >
        <div>
          <img
            src="https://img.icons8.com/dusk/64/000000/add-user-male.png"
            alt="addUser"
            height="40"
            width="40"
          />
        </div>
      </Fab>
      <div style={{ position: 'absolute' }}>
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </div>
      <Modal
        style={{ position: 'absolute' }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Open}
        Onclose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Open}>
          <div className="">
            <div className="d-flex content-align-center" id="transition-modal-description">
              <form className="mx-auto bg-white p-4">
                <div>
                  <h2 id="transition-modal-title">Registro nuevo usuario</h2>
                </div>
                <div className="mt-2">
                  <TextField style={inputStyles} id="standard-basic" label="Nombre" />
                </div>
                <div className="mt-2">
                  <TextField style={inputStyles} id="standard-basic" label="Apellidos" />
                </div>
                <div className="mt-2">
                  <TextField style={inputStyles} id="standard-basic" label="Correo" />
                </div>
                <div className="mt-2">
                  <TextField style={inputStyles} id="standard-basic" label="Nombre de Usuario" />
                </div>
                <div className="mt-2">
                  <TextField style={inputStyles} id="standard-basic" label="N. Identidad" />
                </div>
                <div className="mt-2">
                  <TextField style={inputStyles} id="standard-basic" label="N. Telefono" />
                </div>
                <div className="mt-3">
                  <Button variant="contained" color="primary">
                    Registrar
                  </Button>
                  <Button
                    className="ml-4"
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Users;
