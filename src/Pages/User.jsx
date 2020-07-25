import React, { useEffect, useState } from 'react';
import { Grid, Avatar, ListItemText, Typography } from '@material-ui/core';
import UserController from '../Controllers/loginController';

const User = () => {
  const [infoUser, setInfoUser] = useState(false);

  const getInfo = async () => {
    const user = new UserController();
    const userData = await user.GetInfoUser('5f0e7ac1ebf8770017d6b7fa');
    console.log(userData);
    if (!userData.err) {
      setInfoUser(userData.item);
    }
  };

  useEffect(() => {
    if (!infoUser) {
      getInfo();
    }
  });

  return (
    <>
      <Grid container alignItems="center" className="border border-danger">
        <Grid item lg={3} sm={4} xs={10} className="bg-dark mx-auto border border-success">
          <Avatar
            alt={infoUser.nombre}
            src={infoUser.imgUsuario}
            className="mx-auto"
            style={{ width: '10rem', height: '10rem', fontSize: '7rem' }}
          />
          <Grid item justify="center" alignContent="center">
            <ListItemText
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Nombre :
                  </Typography>
                  {infoUser.nombres}
                </>
              }
            />
            <ListItemText
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Apellido :
                  </Typography>
                  {infoUser.apellidos}
                </>
              }
            />
            <ListItemText
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Rol :
                  </Typography>
                  {infoUser.rol}
                </>
              }
            />
          </Grid>
        </Grid>
        <Grid item lg={8} sm={8} xs={11} className="bg-dark mx-auto border border-success">
          <Grid item xs={11} className="bg-dark mx-auto border border-success">
            <h1>Permisos</h1>
          </Grid>
          <Grid item xs={11} className="bg-dark mx-auto border border-success">
            <h1>Historial</h1>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default User;
