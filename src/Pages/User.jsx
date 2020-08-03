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
  ListItem
} from '@material-ui/core';
import Helmet from 'react-helmet';
import UserController from '../Controllers/loginController';
import NavBar from '../Components/Navbar';



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
              <Button size="medium" color="primary" className="mx-auto" style={{fontWeight:'bold',outline:"0"}}>
                Editar
              </Button>
              <Button size="medium" color="primary" className="mx-auto" style={{fontWeight:'bold',outline:"0"}}>
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
                      <div style={{fontSize:'25px',color:'#444444',fontWeight:'bold'}}>
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
                        <List component="nav"  aria-label="mailbox folders">
                          <ListItem button>
                            <ListItemText 
                             primary={
                               <div className='mb-2' style={{fontSize:'20px',color:'#444444'}}>
                                 #{elemento.nombre}
                               </div>
                              } 
                             secondary={
                               <div style={{fontSize:'16px',fontWeight:'bold'}}>
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
      <Grid container className="mt-5 mb-5" style={{paddingLeft:'33px',paddingRight:'33px'}}>
        <Grid item lg={12} md={12} xs={12} className='mx-auto' style={{backgroundColor:'#f1f3f5',borderRadius:'5px'}} alignItems="center">
          <CardActionArea style={{padding:'20px'}}>
            <div className="d-flex mt-3">
                    <Typography component="h3" variant="h5" className="mx-auto">
                      <div style={{fontSize:'25px',color:'#444444',fontWeight:'bold'}}>
                        Bitacora de Usuario
                      </div>                      
                    </Typography>
            </div>
            <Divider/>
            <Divider/>
            <CardContent style={{minHeight: '19.8rem'}}>
  
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
    </>
  );
};
export default User;
