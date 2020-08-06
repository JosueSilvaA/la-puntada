import React, { useState, useEffect } from 'react';
import ReactPDF, { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios'
import VentasDiarias from '../Reports/VentasDiarias';

const Reporte = () => (
  <PDFViewer>
    <VentasDiarias />
  </PDFViewer>
);

const App = () => {
  const [Reporte, setReporte] = useState({ value: false, reporte: {} });
  async function getReporte() {
    let datosRespuesta;
    const postData = {
      fecha: '08/03/2020',
    };
    await axios
      .post('http://localhost:3000/api/facturaCliente/obtenerVentasDiarias', postData)
      .then((res) => {
        console.log(res);
        datosRespuesta = res.data;
      })
      .catch((err) => {
        console.log(err);
        datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
      });
    setReporte({ value: true, reporte: datosRespuesta.Items });
    // if(datosRespuesta.Items){
    //   datosRespuesta.Items.map((e,i)=>(console.log(e.rtn)))
    //   // datosRespuesta.Items.forEach(element => {
    //   //   console.log(element)
    //   // });
    // }
  }

  useEffect(() => {
    getReporte();
  }, []);
  const { reporte, value } = Reporte;
  return (
    <div>
      {value ? (
        <PDFDownloadLink document={<VentasDiarias data={reporte} />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      ) : (
        'Cargando'
      )}
    </div>
  );
};

export default App;
