import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Grid,
  ListItemText,
  Typography,
} from '@material-ui/core';
import RolController from '../Controllers/UsersController';

// eslint-disable-next-line react/prop-types
const UserListItem = ({ rol, nombres, apellido, imgUsuario, idUser }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/user/${idUser}`);
  };


  return (
    <>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className="mx-auto"
        style={{ paddingLeft: '20px', paddingRight: '20px', margin: '0px' }}
      >
        <List>
          <ListItem
            alignItems="center"
            className="bg-white"
            button
            onClick={onClick}
            style={{
              borderTopLeftRadius: '40px',
              borderBottomLeftRadius: '40px',
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
              paddingBottom: '0px',
            }}
          >
            <ListItemAvatar>
              <Avatar alt={nombres} src={imgUsuario} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <div style={{ fontWeight: 'bold' }}>
                  {nombres} {apellido}
                </div>
              }
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Rol:
                  </Typography>
                  {/* {Rol.value ? Rol.nombre : 'undefined'} */}
                  {rol}
                </>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </>
  );
};
export default UserListItem;
