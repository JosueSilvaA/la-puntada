import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import NavBar from '../Components/Navbar';
import MainReportItem from '../Components/MainReportItem';


const MainReport = () => {
  return (
    <>
      <NavBar pageName="La Puntada - Reportes" goBack />
      <Divider />
      <Grid >
          <div className="" style={{width:'100%',marginTop:'1rem'}}>
            <Grid container mx="auto"   alignItems="center" spacing={3} style={{marginLeft:'0px',marginRight:'0px',width:'100%'}}>
                <MainReportItem
                    iconItem="fas fa-file-invoice-dollar"
                    nameItem="Ventas Diarias"
                    route=""
                    bgColor="#694bb6"
                    pdLeft="0px"
                />
                <MainReportItem
                    iconItem="fas fa-receipt"
                    nameItem="Compras Diarias"
                    route=""
                    bgColor="green"
                    pdLeft="0px"
                    />
                  <MainReportItem
                    iconItem="fas fa-clipboard"
                    nameItem="Ventas Semanales"
                    route=""
                    bgColor="red"
                    pdLeft="0px"
                  />
                  
                  <MainReportItem
                    iconItem="fas fa-chart-area"
                    nameItem="Productos Más Vendido al Mes"
                    route=""
                    bgColor="blue"
                    pdLeft="0px"
                  />
             </Grid>
          </div>
      </Grid>
      
    </>
  );
};
  
  export default MainReport;
