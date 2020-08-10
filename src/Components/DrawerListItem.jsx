import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

const DrawerListItem = (props) => {
  const { route, name, icon } = props;

  const history = useHistory();

  const goTo = () => {
    history.push(route);
  };

  return (
    <ListItem button onClick={goTo}>
      <ListItemIcon className="mx-auto">
        <Icon className={icon} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};
export default DrawerListItem;
