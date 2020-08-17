/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios';
import VentasDiarias from '../Reports/VentasDiarias';

// eslint-disable-next-line no-unused-vars
const Reporte = () => (
  <PDFViewer>
    <VentasDiarias />
  </PDFViewer>
);

const App = () => {
  // eslint-disable-next-line no-shadow
  const [Reporte, setReporte] = useState({ value: false, reporte: {} });
  async function getReporte() {
    let datosRespuesta;
    const postData = {
      fecha: '08/03/2020',
    };
    await axios
      .post('http://localhost:3000/api/facturaCliente/obtenerVentasDiarias', postData)
      .then((res) => {
        datosRespuesta = res.data;
      })
      .catch((err) => {
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
          {/* eslint-disable-next-line no-unused-vars */}
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      ) : (
        'Cargando'
      )}
    </div>
  );
};

export default App;
