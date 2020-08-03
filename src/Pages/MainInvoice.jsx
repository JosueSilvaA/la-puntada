import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import NavBar from '../Components/Navbar';
import MainInvoiceItem from '../Components/MainInvoiceItem';


const MainInvoice = () => {
  return (
    <>
      <NavBar pageName="La Puntada - Factura" goBack />
      <Divider />
      <Grid >
          <div className="" style={{width:'100%',marginTop:'1rem'}}>
            <Grid container mx="auto"   alignItems="center" spacing={3} style={{marginLeft:'0px',marginRight:'0px',width:'100%'}}>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12} style={{padding:'0px'}}>
                    <MainInvoiceItem 
                        iconItem="fas fa-tasks"
                        nameItem="Ver Facturas"
                        route="/invoiceList"
                        bgColor="#694bb6"
                        pdLeft="0px"
                    />
                </Grid>
                <Grid item lg={6} xl={6} md={6} xs={12} sm={12} style={{padding:'0px'}}>
                    <MainInvoiceItem
                        iconItem="fas fa-folder-plus"
                        nameItem="Agregar Factura Cliente"
                        route="/clientInvoice"
                        bgColor="green"
                        pdLeft="0px"
                        />
                </Grid> 
                <Grid item lg={6} xl={6} md={6} xs={12} sm={12} style={{padding:'0px'}}>
                  <MainInvoiceItem
                    iconItem="fas fa-plus-circle"
                    nameItem="Agregar Factura Proveedor"
                    route="/ProviderInvoice"
                    bgColor="blue"
                    pdLeft="0px"
                  />
                </Grid> 
             </Grid>
          </div>
      </Grid>
      
    </>
  );
};
  
  export default MainInvoice;
