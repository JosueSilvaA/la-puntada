import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import MainItem from '../Components/MainItem';

import NavBar from '../Components/Navbar';

// import logo from '../logo.svg'

const Main = () => {
  return (
    <>
      <NavBar pageName="La Puntada" goBack={false} />
      <Divider />
      <div className="mt-5">
        <Grid container spacing={3}>
          <MainItem
            iconItem="fas fa-users"
            nameItem="Usuarios"
            route="/users"
            bgColor="#694bb6"
            pdLeft="5px"
          />
          <MainItem
            iconItem="fab fa-stack-overflow"
            nameItem="Catalogos"
            route="/catalogo"
            bgColor=" #e67e22 "
            pdLeft="12px"
          />
          <MainItem
            iconItem="fas fa-list-alt"
            nameItem="Manejar Inventario"
            route="/maininventory"
            bgColor="blue"
            pdLeft="8px"
          />
        </Grid>
      </div>
    </>
  );
};

export default Main;
