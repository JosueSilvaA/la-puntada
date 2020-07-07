import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core';

const UserListItem = () => {
  return (
    <>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://img.icons8.com/dusk/64/000000/user-male.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Nombre de usuario"
            secondary={
              <>
                <Typography component="span" variant="body2" color="textPrimary">
                  Rol:
                </Typography>
                Rol del usuario
              </>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
};
export default UserListItem;
