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

// eslint-disable-next-line react/prop-types
const UserListItem = ({ rol, nombres, apellido, imgUsuario, estado }) => {
  return (
    <>
      <List>
        <ListItem
          alignItems="flex-start"
          className="bg-white"
          button="true"
          style={{
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={imgUsuario} />
          </ListItemAvatar>
          <ListItemText
            primary={`${nombres} ${apellido}`}
            secondary={
              <>
                <Typography component="span" variant="body2" color="textPrimary">
                  Rol:
                </Typography>
                {rol}
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
