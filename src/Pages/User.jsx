/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import NavBar from '../Components/Navbar';
import UserController from '../Controllers/loginController';
import Permissions from '../Controllers/Permissions';
import Tests from '../Components/tests';

const columns = [
  { id: 'No', label: 'No', minWidth: 170 },
  { id: 'Usuario', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'Fecha',
    label: 'Fecha',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Hora',
    label: 'Hora',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Actividad',
    label: 'Actividad',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Descripcion',
    label: 'Descripcion',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(No, Usuario, Fecha, Hora, Actividad, Descripcion) {
  return { No, Usuario, Fecha, Hora, Actividad, Descripcion };
}

const rows = [
  createData('1', 'Silva', '18-08-2020', '06:00 a.m', 'Registro de factura', ''),
  createData('2', 'Josue', '18-08-2020', '06:00 a.m', 'Registro de factura', ''),
  createData('3', 'ITa', '18-08-2020', '06:00 a.m', 'Registro de factura', ''),
  createData('4', 'Angela', '18-08-2020', '06:00 a.m', 'Registro de factura', ''),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const User = (props) => {
  const [infoUser, setInfoUser] = useState(false);
  const [InfoRol, setInfoRol] = useState({ value: false, info: {} });

  const [OpenModal, setOpenModal] = useState(false);

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

  useEffect(() => {
    viewToken();
  }, []);

  // Tabla bitacora
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #6f4a8e' }} />
      <NavBar pageName="Perfil Usuario" goBack />
      <Grid container alignItems="center" className="mt-5">
        <Grid item lg={3} md={3} sm={4} xs={10} className="mx-auto border border-success mb-3">
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
                          Nombres :
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
                          Apellidos :
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
                {!InfoRol.value && (
                  <div className="d-flex">
                    <CircularProgress className="mx-auto" size={50} color="secondary" />
                  </div>
                )}
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
                    InfoRol.info.privilegios.map((elemento) => (
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
              <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Paper>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
      <div>
        <Modal
          open={OpenModal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Grid container alignItems="center" spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={10} className="bg-white mx-auto">
              <Tests infoUser={infoUser} />
            </Grid>
          </Grid>
        </Modal>
      </div>
    </>
  );
};
export default User;
