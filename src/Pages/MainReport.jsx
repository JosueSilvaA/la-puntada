import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Helmet from 'react-helmet';
import NavBar from '../Components/Navbar';
import MainReportItem from '../Components/MainReportItem';
import '../Styles/Reportes.css';

const MainReport = () => {
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #3b6978' }} />      
      <NavBar pageName="La Puntada - Reportes" goBack />
      <Divider />
      <Grid>
        <div className="contenedor-opciones pt-3 pb-3" style={{ width: '100%',height:'100%'}}>
          <Grid
            container
            mx="auto"
            className="opciones"
            alignItems="center"
            spacing={5}
            style={{ width: '80%',marginBottom:'10px',marginTop:'10px' }}
          >
           {/*  <MainReportItem
              iconItem="fas fa-file-invoice-dollar"
              nameItem="Ventas Diarias"
              route=""
              bgColor="#f6ab6c"
              pdLeft="0px"
            />
            <MainReportItem
              iconItem="fas fa-receipt"
              nameItem="Compras Diarias"
              route=""
              bgColor="#006a71"
              pdLeft="0px"
            />
            <MainReportItem
              iconItem="fas fa-clipboard"
              nameItem="Ventas Semanales"
              route=""
              bgColor="#3b2e5a"
              pdLeft="0px"
            /> */}

            <MainReportItem
              iconItem="fas fa-chart-area"
              nameItem="Productos Más Vendido"
              route="/mostSelledProducts"
              bgColor="#b83b5e"
              pdLeft="0px"
            />
            <MainReportItem
              iconItem="fas fa-chart-area"
              nameItem="Ventas por Empleado"
              route="/employeeSalesReport"
              bgColor="#8675a9"
              pdLeft="0px"
            />
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default MainReport;
