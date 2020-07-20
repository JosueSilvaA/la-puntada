import React from 'react';
import { Grid, Divider } from '@material-ui/core';

import NavBar from '../Components/Navbar';
import MainInventoryItem from '../Components/MainInventoryItem';


const MainInventory = () => {
  return (
    <>
      <NavBar pageName="La Puntada" goBack={false} />
      <Divider />
      <div className="" style={{marginTop:'1rem'}}>
        <Grid container spacing={3} style={{width:'100%'}}>
          <MainInventoryItem
            iconItem="fas fa-table"
            nameItem="Ver inventario"
            route="/users"
            bgColor="#694bb6"
            pdLeft="0px"
          />
          <MainInventoryItem
            iconItem="fas fa-plus-square"
            nameItem="Agregar Producto"
            route="/inventory"
            bgColor="green"
            pdLeft="0px"
          />
          <MainInventoryItem
            iconItem="fas fa-check-square"
            nameItem="Editar Producto"
            route="/inventory"
            bgColor="red"
            pdLeft="0px"
          />
           <MainInventoryItem
            iconItem="fas fa-trash"
            nameItem="Eliminar Producto"
            route="/main-inventory"
            bgColor="blue"
            pdLeft="0px"
          />
        </Grid>
      </div>
    </>
  );
};
  
  export default MainInventory;
