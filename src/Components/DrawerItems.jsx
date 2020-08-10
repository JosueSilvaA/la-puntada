import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Icon } from '@material-ui/core';
import DrawerListItem from './DrawerListItem';

const DrawerItems = () => {
  const data = [
    { name: 'Usuarios', route: '/users', icon: 'fas fa-users' },
    { name: 'Catalogo', route: '/catalogo', icon: 'fab fa-stack-overflow' },
    { name: 'Inventario', route: '/maininventory', icon: 'fas fa-list-alt' },
    { name: 'Fatura', route: '/mainInvoice', icon: 'fas fa-file-invoice' },
    { name: 'Reportes', route: '/mainReport', icon: 'fas fa-chart-line' },
    { name: 'Proveedores', route: '/providers', icon: 'fas fa-user-tie' },
  ];

  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Icon className="fas fa-home" />
          </ListItemIcon>
          <ListItemText primary="La Puntada" />
        </ListItem>
        <Divider />
        {data.map((element) => (
          <DrawerListItem name={element.name} icon={element.icon} route={element.route} />
        ))}
      </List>
      <Divider />
    </>
  );
};

export default DrawerItems;
