import React, { useState, useEffect } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { TextField, Grid } from '@material-ui/core';
import UserController from '../Controllers/UsersController';

// eslint-disable-next-line react/prop-types
const SearchUser = ({ selectUser }) => {
  const [Users, setUsers] = useState([0]);
  const [Connection, setConnection] = useState(false);

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (user) => user.nombres,
  });

  const getUsersList = async () => {
    const user = new UserController();
    const result = await user.getUsers();
    if (!result.err) {
      setUsers(result.items);
      setConnection(true);
    }
  };
  useEffect(() => {
    getUsersList();
  }, []);

  const selectOneUser = () => {
    // eslint-disable-next-line no-undef
    const selectedUser = document.getElementById('select');
    setTimeout(() => {
      Users.forEach((user) => {
        if (user.nombres === selectedUser.value) {
          selectUser(user);
        }
      });
    }, 50);
  };

  return (
    <>
      <Grid
        item
        xs={10}
        md={6}
        className="mx-auto mt-3 bg-white p-2"
        style={{ borderRadius: '15px', color: 'black' }}
      >
        <Autocomplete
          className="d-block"
          id="select"
          onClose={selectOneUser}
          disableListWrap={!Connection}
          options={Connection ? Users : [{ nombres: '....' }]}
          getOptionLabel={(user) => user.nombres}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              placeholder={!Connection ? 'Esperando conexión...' : 'Selecciona un empleado.'}
              error={!Connection}
              variant="standard"
            />
          )}
        />
      </Grid>
    </>
  );
};
export default SearchUser;
