/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Card,
  CircularProgress,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  Modal,
} from '@material-ui/core';
import Helmet from 'react-helmet';
import swal from 'sweetalert';
import NavBar from '../Components/Navbar';
import UserController from '../Controllers/loginController';
import UsersCtrl from '../Controllers/UsersController';
import Permissions from '../Controllers/Permissions';
import Tests from '../Components/tests';
import UserBitacora from '../Components/UserBitacora';

const User = (props) => {
  const [infoUser, setInfoUser] = useState({ value: false, user: '' });
  const [InfoRol, setInfoRol] = useState({ value: false, info: {} });
  const [OpenModal, setOpenModal] = useState(false);

  const history = useHistory();

  const getInfo = async () => {
    const user = new UserController();
    const userData = await user.GetInfoUser(props.match.params.idUser);

    if (!userData.err) {
      setInfoUser({ value: true, user: userData.item });
    }
    const dataRol = await user.GetInfoRol(userData.item.rol._id);
    if (!dataRol.err) {
      setInfoRol({ value: true, info: dataRol.items.privilegios });
    }
  };

  const handleOPen = () => {
    setOpenModal(true);
  };

  const onClickCardUser = () => {
    handleOPen();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const viewToken = async () => {
    const UserPermissions = new Permissions();
    const resultToken = await UserPermissions.ViewUserToken();
    if (!resultToken) {
      UserPermissions.RedirectUser();
    } else {
      getInfo();
    }
  };

  const deleteUser = async () => {
    const userCtrl = new UsersCtrl();
    swal({
      title: '¿Estás seguro?',
      text: 'Eliminarás este usuario!.',
      icon: 'warning',
      // buttons: true,
      buttons: ['Cancelar', 'Eliminar'],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await userCtrl.deleteUser(infoUser.user._id);
        if (!result.err) {
          swal('Éxito', result.message, 'success', { timer: 2000 }).then(() => {
            history.replace('/users');
          });
        } else {
          swal('Error', result.message, 'error');
        }
      }
    });
  };

  useEffect(() => {
    viewToken();
  }, []);

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #6f4a8e' }} />
      <NavBar pageName="Perfil Usuario" goBack />
      <Grid container alignItems="center" className="mt-5">
        <Grid item lg={3} md={3} sm={4} xs={10} className="mx-auto border border-success mb-3">
          <Card>
            <CardActionArea>
              <Avatar
                alt={infoUser.value && infoUser.user.nombre}
                src={infoUser.value && infoUser.user.imgUsuario}
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
                          {infoUser.value && infoUser.user.usuario}
                        </Typography>
                      </>
                    }
                  />{' '}
                  <ListItemText
                    className="text-center"
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Nombres :
                        </Typography>
                        {infoUser.value && infoUser.user.nombres}
                      </>
                    }
                  />
                  <ListItemText
                    className="text-center"
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Apellidos :
                        </Typography>
                        {infoUser.value && infoUser.user.apellidos}
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
                        {infoUser.value && infoUser.user.rol.nombre}
                        {/* {InfoRol.value && InfoRol.info.rol.nombre} */}
                      </>
                    }
                  />
                </Grid>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={onClickCardUser}
                size="medium"
                color="primary"
                className="mx-auto"
                style={{ fontWeight: 'bold', outline: '0' }}
              >
                Editar
              </Button>
              <Button
                size="medium"
                onClick={deleteUser}
                color="primary"
                className="mx-auto"
                style={{ fontWeight: 'bold', outline: '0' }}
              >
                Borrar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={8} md={8} sm={7} xs={11} className="mx-auto mb-3">
          <Grid item lg={12} md={12} xs={11} className="mx-auto">
            <Card className="border border-danger">
              <CardActionArea>
                <div className="d-flex mt-3">
                  <Typography component="h3" variant="h5" className="mx-auto">
                    <div style={{ fontSize: '25px', color: '#444444', fontWeight: 'bold' }}>
                      Privilegios del usuario
                    </div>
                  </Typography>
                </div>
                <CardContent style={{ minHeight: '19.8rem' }}>
                  <Divider />
                  {!InfoRol.value && (
                    <div className="d-flex">
                      <CircularProgress className="mx-auto" size={50} color="secondary" />
                    </div>
                  )}
                  {InfoRol.value &&
                    InfoRol.info.map((elemento) => (
                      <div key={elemento._id}>
                        <Divider />
                        <List component="nav" aria-label="mailbox folders">
                          <ListItem button>
                            <ListItemText
                              primary={
                                <div
                                  className="mb-2"
                                  style={{ fontSize: '20px', color: '#444444' }}
                                >
                                  #{elemento.nombre}
                                </div>
                              }
                              secondary={
                                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                  {elemento.descripcion}
                                </div>
                              }
                            />
                          </ListItem>
                        </List>
                      </div>
                    ))}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="mt-5 mb-5" style={{ paddingLeft: '33px', paddingRight: '33px' }}>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          className="mx-auto"
          style={{ backgroundColor: '#f1f3f5', borderRadius: '5px' }}
        >
          <CardActionArea style={{ padding: '20px' }}>
            <div className="d-flex mt-3">
              <Typography component="h3" variant="h5" className="mx-auto">
                <div style={{ fontSize: '25px', color: '#444444', fontWeight: 'bold' }}>
                  Bitacora de Usuario
                </div>
              </Typography>
            </div>
            <Divider />
            <Divider />
            <CardContent style={{ minHeight: '19.8rem' }}>
              <UserBitacora idUser={props.match.params.idUser} />
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
      <div>
        <Modal
          open={OpenModal}
          onClose={handleClose}
          className="mt-5"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Grid container alignItems="center" spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={10} className="bg-white mx-auto">
              <Tests infoUser={infoUser.user} />
            </Grid>
          </Grid>
        </Modal>
      </div>
    </>
  );
};
export default User;
