import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import NavBar from '../Components/Navbar';
import MainInvoiceItem from '../Components/MainInvoiceItem';
import '../Styles/Reportes.css'

const MainInvoice = () => {
  return (
    <>
      <NavBar pageName="La Puntada - Factura" goBack />
      <Divider />
      <Grid >
          <div className="contenedor-opciones" style={{width:'100%'}}>
            <Grid container mx="auto" className='opciones'  alignItems="center" spacing={5} style={{width:'80%'}}>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12} style={{padding:'0px'}}>
                    <MainInvoiceItem 
                        iconItem="fas fa-tasks"
                        nameItem="Ver Facturas"
                        route="/invoiceList"
                        bgColor="#f6ab6c"
                        pdLeft="0px"
                    />
                </Grid>
                <Grid item lg={6} xl={6} md={6} xs={12} sm={12} style={{padding:'0px'}}>
                    <MainInvoiceItem
                        iconItem="fas fa-folder-plus"
                        nameItem="Agregar Factura Cliente"
                        route="/clientInvoice"
                        bgColor="#006a71"
                        pdLeft="0px"
                        />
                </Grid> 
                <Grid item lg={6} xl={6} md={6} xs={12} sm={12} style={{padding:'0px'}}>
                  <MainInvoiceItem
                    iconItem="fas fa-plus-circle"
                    nameItem="Agregar Factura Proveedor"
                    route="/ProviderInvoice"
                    bgColor="#3b2e5a"
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
