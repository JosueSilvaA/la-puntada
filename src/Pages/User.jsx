import React, { useEffect, useState } from 'react';
import {
  Grid,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import Helmet from 'react-helmet';
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
      <Helmet bodyAttributes={{ style: 'background-color : #694bb6' }} />
      <Grid container alignItems="center" className="mt-2">
        <Grid item lg={3} sm={4} xs={10} className="mx-auto border border-success mb-3">
          <Card>
            <CardActionArea>
              <Avatar
                alt={infoUser.nombre}
                src={infoUser.imgUsuario}
                className="mx-auto border border-danger mt-2"
                style={{ width: '10rem', height: '10rem', fontSize: '7rem' }}
              />
              <CardContent>
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
                  />{' '}
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
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className="mx-auto">
                Editar
              </Button>
              <Button size="medium" color="primary" className="mx-auto">
                Borrar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={8} sm={8} xs={11} className="mx-auto mb-3">
          <Grid item lg={12} xs={11} className="mx-auto">
            <Card>
              <CardActionArea>
                <Typography
                  component="h1"
                  variant="h4"
                  className="border-bottom border-danger mb-1"
                >
                  Usuario {InfoRol.value && InfoRol.info.rol.nombre}
                </Typography>
                <CardContent>
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
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="medium" color="primary" className="mx-auto">
                  Editar
              </Button>
                <Button size="medium" color="primary" className="mx-auto">
                  Borrar
              </Button>
              </CardActions> */}
            </Card>
          </Grid>
        </Grid>
        <Grid item lg={11} md={11} xs={10} className="bg-dark mx-auto border border-success mt-2">
          <h1>Bitacora del usuario</h1>
        </Grid>
      </Grid>
    </>
  );
};
export default User;
