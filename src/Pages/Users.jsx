import React, { useState, useEffect } from 'react';
import { Fab, Backdrop, Fade, Modal, Button } from '@material-ui/core';
import UserListItem from '../Components/UserListItem';
import UserControler from '../Controllers/UsersController';
import RegisterForm from '../Components/RegisterForm';

const Users = () => {
  const [Open, setOpen] = useState(true);
  const [Data, setData] = useState({ users: [] });
  useEffect(() => {
    async function GetUsers() {
      const user = new UserControler();
      const users = await user.getUsers();
      setData({
        users,
      });
    }
    GetUsers();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        // onClick={getUser}
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
      <div style={{ position: 'absolute', width: '100%' }}>
        {Data.users.map((user) => (
          <UserListItem
            // eslint-disable-next-line no-underscore-dangle
            key={user._id}
            rol={user.rol}
            nombres={user.nombres}
            apellido={user.apellido}
            imgUsuario={user.imgUsuario}
            estado={user.estado}
          />
        ))}
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
          <div className="border border-dark" id="transition-modal-title">
            <div className="container">
              <div className="">
                <RegisterForm />
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
