import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import NavBar from '../Components/Navbar';
import MainInventoryItem from '../Components/MainInventoryItem';
import MainInventoryItem2 from '../Components/maininventoryitemweb';


const MainInventory = () => {
  return (
    <>
      <NavBar pageName="La Puntada - Inventario" goBack />
      <Divider />
      <Hidden only={['lg', 'xl', 'md']}>
          <div className="" style={{width:'100%',marginTop:'1rem'}}>
            <Grid container mx="auto"   alignItems="center" spacing={3} style={{marginLeft:'0px',marginRight:'0px',width:'100%'}}>
              
                <Grid item xs>
                  <MainInventoryItem
                    iconItem="fas fa-table"
                    nameItem="Ver inventario"
                    route="/Catalogo"
                    bgColor="#694bb6"
                    pdLeft="0px"
                  />
                  <MainInventoryItem
                    iconItem="fas fa-plus-square"
                    nameItem="Agregar Producto"
                    route="/inventory/newProduct"
                    bgColor="green"
                    pdLeft="0px"
                  />
                  <MainInventoryItem
                    iconItem="fas fa-check-square"
                    nameItem="Editar Producto"
                    route="/inventory/editProduct"
                    bgColor="red"
                    pdLeft="0px"
                  />
                  <MainInventoryItem
                    iconItem="fas fa-trash"
                    nameItem="Eliminar Producto"
                    route="/inventory/deleteProduct"
                    bgColor="blue"
                    pdLeft="0px"
                  />
                </Grid> 
            </Grid>
          </div>
      </Hidden>
      <Hidden only={['xs', 'sm']} >
          <div style={{borderColor:'black' , padding:'20px',width:'100%',marginTop:'1rem'}}>
            <Grid container className=""   alignItems="center" spacing={3} style={{paddingTop:'30px',paddingBottom:'30px' ,marginTop:'10px',marginBottom:'10px',marginLeft:'0px',marginRight:'0px',width:'100%'}}>
              
                <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-table"
                        nameItem="Ver inventario"
                        route="/catalogo"
                        bgColor="#694bb6"
                        pdLeft="0px"
                      />
                 </Grid> 
                  <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-plus-square"
                        nameItem="Agregar Producto"
                        route="/inventory/newProduct"
                        bgColor="green"
                        pdLeft="0px"
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-check-square"
                        nameItem="Editar Producto"
                        route="/inventory/editProduct"
                        bgColor="red"
                        pdLeft="0px"
                      />
                   </Grid>
                  <Grid item xs={6}>
                      <MainInventoryItem2
                        iconItem="fas fa-trash"
                        nameItem="Eliminar Producto"
                        route="/inventory/deleteProduct"
                        bgColor="blue"
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
