import React from 'react';
import { Fab } from '@material-ui/core';
import UserListItem from '../Components/UserListItem';

const Users = () => {
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
        href="/main"
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
    </>
  );
};

export default Users;
