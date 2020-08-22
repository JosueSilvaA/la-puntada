import React, { useState, useEffect } from 'react'
import {
    PDFViewer,
    PDFDownloadLink,
    // PDFDownloadLink
  } from '@react-pdf/renderer';
import { useHistory } from 'react-router-dom';
import SalesReport from '../Controllers/SalesReports';
import MostSells from './MostSells';
import swal from 'sweetalert';
import moment from 'moment';
import { Hidden, Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import NavBar from '../Components/Navbar';

const Reporte = (data) => (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <MostSells data ={data}/>
    </PDFViewer>
  );

const MostSellsProducts = () => {

    const history = useHistory();
    const [sellsProducts, setSellsProducts] = useState({ value: false, data: []})
    const dateNow = moment().format('LLL');
    const getSellProducts = async () =>{
        const reportController = new SalesReport();
        const mostSells = await reportController.mostSellsProducts();
        console.log('mas vendido', mostSells)
        if(!mostSells.err){
            if(mostSells.data.length === 0){
                swal('Aviso', 'El usuaio no tiene ninguna venta registrada', 'error', {
                    timer: 2000,
                  }).then(() => {
                    history.replace('/mainReport');
                  });
                  
            }else{
                setSellsProducts({
                    value:true,
                    data:mostSells.data
                })
                console.log('FUCK ',mostSells.data)
            }
        }

    }

    useEffect(() => {
        getSellProducts();
      }, []);

    return (
      <>
        <Helmet bodyAttributes={{ style: 'background-color : #3d3d3d' }} />
        <NavBar goBack pageName="Producto mas vendido" />
        <Hidden only={['xs']}>
        <div style={{ height: '99vh' }}>
            {sellsProducts.value && Reporte(sellsProducts.data)}
        </div>
      </Hidden>
      <Hidden only={['xl', 'lg', 'md']}>
        {sellsProducts.value && (
          <Grid container className="mt-5">
            <Grid
              item
              xs={8}
              sm={6}
              className="btn btn-block btn-success text-danger border border-danger mx-auto"
            >
              <PDFDownloadLink
                style={{ textDecoration: 'none', color: 'white' }}
                document={<MostSells data={sellsProducts.data} />}
                fileName={`${dateNow}.pdf`}
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Descargar Reporte'
                }
              </PDFDownloadLink>
            </Grid>
          </Grid>
        )}
      </Hidden> 
      </>
    )
}

export default MostSellsProducts
