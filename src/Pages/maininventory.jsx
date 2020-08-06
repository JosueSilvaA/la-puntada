import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Helmet from 'react-helmet';
import Hidden from '@material-ui/core/Hidden';
import NavBar from '../Components/Navbar';
import MainInventoryItem from '../Components/MainInventoryItem';
import MainInventoryItem2 from '../Components/maininventoryitemweb';
import '../Styles/Inventario.css'


const MainInventory = () => {
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #654062' }} />
      <NavBar pageName="La Puntada - Inventario" goBack />
      <Divider />
      <Hidden only={['lg', 'xl', 'md']}>
          <div className="contenedor-opciones-movil" >
            <Grid container className='prueba'  alignItems="center" spacing={5} style={{width:'95%'}}>
              
                <Grid item xs>
                  <MainInventoryItem
                    iconItem="fas fa-table"
                    nameItem="Ver inventario"
                    route="/Catalogo"
                    bgColor="#f6ab6c"
                    pdLeft="0px"
                  />
                  <MainInventoryItem
                    iconItem="fas fa-plus-square"
                    nameItem="Agregar Producto"
                    route="/inventory/newProduct"
                    bgColor="#006a71"
                    pdLeft="0px"
                  />
                  <MainInventoryItem
                    iconItem="fas fa-check-square"
                    nameItem="Editar Producto"
                    route="/inventory/editProduct"
                    bgColor="#3b2e5a"
                    pdLeft="0px"
                  />
                  <MainInventoryItem
                    iconItem="fas fa-trash"
                    nameItem="Eliminar Producto"
                    route="/inventory/deleteProduct"
                    bgColor="#b83b5e"
                    pdLeft="0px"
                  />
                </Grid> 
            </Grid>
          </div>
      </Hidden>
      <Hidden only={['xs', 'sm']}>
          <div className='contenedor-opciones'>
            <Grid container className="opciones"   alignItems="center" spacing={5} style={{width:'80%'}}>
              
                <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-table"
                        nameItem="Ver inventario"
                        route="/catalogo"
                        bgColor="#f6ab6c"
                        pdLeft="0px"
                      />
                 </Grid> 
                  <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-plus-square"
                        nameItem="Agregar Producto"
                        route="/inventory/newProduct"
                        bgColor="#006a71"
                        pdLeft="0px"
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-check-square"
                        nameItem="Editar Producto"
                        route="/inventory/editProduct"
                        bgColor="#3b2e5a"
                        pdLeft="0px"
                      />
                   </Grid>
                  <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-trash"
                        nameItem="Eliminar Producto"
                        route="/inventory/deleteProduct"
                        bgColor="#b83b5e"
                        pdLeft="0px"
                      />
                </Grid>              
            </Grid>
          </div>
      </Hidden>
    </>
  );
};
  
  export default MainInventory;
