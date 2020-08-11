import React, { useState, useEffect } from 'react'
import {
    PDFViewer,
    // PDFDownloadLink
  } from '@react-pdf/renderer';
import { useHistory } from 'react-router-dom';
import SalesReport from '../Controllers/SalesReports';
import MostSells from './MostSells';
import swal from 'sweetalert';

const Reporte = (data) => (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <MostSells data ={data}/>
    </PDFViewer>
  );

const MostSellsProducts = () => {

    const history = useHistory();
    const [sellsProducts, setSellsProducts] = useState({ value: false, data: []})

    const getSellProducts = async () =>{
        const reportController = new SalesReport();
        const mostSells = await reportController.mostSellsProducts();
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
        <div style={{ height: '99vh' }}>
            {sellsProducts.value && Reporte(sellsProducts.data)}
        </div>
    )
}

export default MostSellsProducts
