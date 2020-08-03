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
      <div className="mt-5" >
        <Grid container spacing={3} style={{width:'100%',padding:'0px',marginL:'0px'}}>
          <MainItem 
            iconItem="fas fa-users" 
            nameItem="Usuarios" 
            route="/users" 
            bgColor="#694bb6" 
          />
          <MainItem
            iconItem="fab fa-stack-overflow"
            nameItem="Catalogos"
            route="/catalogo"
            bgColor=" #e67e22 "
          />
          <MainItem
            iconItem="fas fa-list-alt"
            nameItem="Manejar Inventario"
            route="/maininventory"
            bgColor="blue"
          />
          <MainItem
            iconItem="fas fa-file-invoice"
            nameItem="Factura"
            route="/mainInvoice"
            bgColor="blue"
          />
          <MainItem
            iconItem="fas fa-chart-line"
            nameItem="Reportes"
            route="/mainReport"
            bgColor="blue"
          />
        </Grid>
      </div>
    </>
  );
};

export default Main;
