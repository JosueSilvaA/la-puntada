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
            iconItem="fas fa-boxes"
            nameItem="Inventario"
            route="/inventory"
            bgColor="green"
            pdLeft="5px"
          />
          <MainItem iconItem="fas fa-car" nameItem="Inventario" route="/inventory" bgColor="blue" />
        </Grid>
      </div>
    </>
  );
};

export default Main;
