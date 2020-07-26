import React from 'react';
import { useHistory } from 'react-router-dom'
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
const UserListItem = ({ rol, nombres, apellido, imgUsuario, estado, idUser }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/user/${idUser}`)
  }
  return (
    <>
      <List>
        <ListItem
          alignItems="flex-start"
          className="bg-white"
          button
          onClick={onClick}
          style={{
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt={nombres} src={imgUsuario} />
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
