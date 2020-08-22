/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import MainItem from '../Components/MainItem';

import NavBar from '../Components/Navbar';

// import logo from '../logo.svg'

const Main = ({ Permissions }) => {
  return (
    <>
      <NavBar pageName="La Puntada" goBack={false} />
      <Divider />
      <div className="mt-5">
        <Grid container spacing={3} style={{ width: '100%', padding: '0px', marginL: '0px' }}>
          {Permissions.users && (
            <MainItem
              iconItem="fas fa-users"
              nameItem="Usuarios"
              route="/users"
              bgColor="#694bb6"
            />
          )}
          <MainItem
            iconItem="fab fa-stack-overflow"
            nameItem="Catalogos"
            route="/catalogo"
            bgColor=" #df5e88"
          />
          <MainItem
            iconItem="fas fa-list-alt"
            nameItem="Inventario"
            route="/maininventory"
            bgColor="#318fb5"
          />
          {(Permissions.mainInvoice || Permissions.clientInvoice) && (
            <MainItem
              iconItem="fas fa-file-invoice"
              nameItem="Factura"
              route="/mainInvoice"
              bgColor="#ffe196"
            />
          )}
          {Permissions.mainReport && (
            <MainItem
              iconItem="fas fa-chart-line"
              nameItem="Reportes"
              route="/mainReport"
              bgColor="#ffb6b9"
            />
          )}
          {Permissions.providers && (
            <MainItem
              iconItem="fas fa-user-tie"
              nameItem="Proveedores"
              route="/providers"
              bgColor="#3b6978"
            />
          )}
          {Permissions.bitacora && (
            <MainItem
              iconItem="fas fa-book"
              nameItem="Bitacora"
              route="/bitacora"
              bgColor="#0f4c75"
            />
          )}
          {Permissions.roles && (
            <MainItem iconItem="fas fa-book" nameItem="Permisos" route="/roles" bgColor="#00CED1" />
          )}
        </Grid>
      </div>
    </>
  );
};

export default Main;
