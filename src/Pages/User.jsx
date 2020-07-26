import React, { useEffect, useState } from 'react';
import { Grid, Paper, Avatar, ListItemText, Typography, Divider } from '@material-ui/core';
import UserController from '../Controllers/loginController';

const User = (props) => {
  const [infoUser, setInfoUser] = useState(false);
  const [InfoRol, setInfoRol] = useState({ value: false, info: {} });

  const getInfo = async () => {
    const user = new UserController();
    const userData = await user.GetInfoUser(props.match.params.idUser);
    if (!userData.err) {
      setInfoUser(userData.item);
    }
    const dataRol = await user.GetInfoRol(userData.item.rol);
    if (!dataRol.err) {
      setInfoRol({ value: true, info: dataRol.items });
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <Grid container alignItems="center" className="border border-danger">
        <Grid item lg={3} sm={4} xs={10} className="mx-auto border border-success">
          <Avatar
            alt={infoUser.nombre}
            src={infoUser.imgUsuario}
            className="mx-auto border border-danger"
            style={{ width: '10rem', height: '10rem', fontSize: '7rem' }}
          />
          <Grid item>
            <ListItemText
              className="text-center"
              secondary={
                <>
                  <Typography component="span" variant="h5" className="text-danger">
                    {infoUser.usuario}
                  </Typography>
                </>
              }
            />
            <ListItemText
              className="text-center"
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
              className="text-center"
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
              className="text-center"
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Rol :
                  </Typography>
                  {/* {infoUser.rol} */}
                  {InfoRol.value && InfoRol.info.rol.nombre}
                </>
              }
            />
          </Grid>
        </Grid>
        <Grid item lg={8} sm={8} xs={11} className="mx-auto">
          <Grid item xs={11} className="mx-auto">
            <Paper variant="outlined">
              <Typography component="h1" variant="h4" className="border-bottom border-danger mb-1">
                Usuario {InfoRol.value && InfoRol.info.rol.nombre}
              </Typography>
            </Paper>
            <Paper variant="outlined">
              <div className="d-flex">
                <Typography component="h3" variant="h5" className="mx-auto">
                  Privilegios del usuario
                </Typography>
              </div>
              <Divider />
              {InfoRol.value &&
                InfoRol.info.privilegios.map((elemento) => (
                  <div key={elemento._id}>
                    <Divider />
                    <ListItemText
                      // key={elemento._id}
                      primary={`${elemento.nombre}`}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="textPrimary">
                            Descripción:
                          </Typography>
                          {elemento.descripcion}
                        </>
                      }
                    />
                  </div>
                ))}
            </Paper>
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
