import React, { useEffect, useState } from 'react';

import {
  Grid,
  Typography,
  Card, CardHeader, CardContent
} from '@material-ui/core';
import invoiceController from '../Controllers/InvoiceCotroller';

// eslint-disable-next-line react/prop-types
const InvoiceListItemProv = ({ prove, fechaFactura,creada,estado, productos,subtotal,isv,total}) => {
    console.log('EL MALDITO ARRAY ',productos)
    const [InfoProveedor, setInfoProv] = useState({ value: false, infoProve: [] });

    const getInfoProveedor = async () =>{
      const invoiceProve = new invoiceController();
      const proveedor =  await invoiceProve.GetNameProvider(prove);
      setInfoProv({ value: true, infoProve: proveedor.items, });
    }

    useEffect(() => {
      getInfoProveedor();
    }, []);

    return (
    <>
    <Grid item xs={12} sm={6} md={4} lg={3} style={{padding:'10px'}}>
        <Card style={{cursor:"default"}}>           
            
                <CardHeader
                  title={InfoProveedor.infoProve.nombre}
                  subheader={creada}
               />
           
          <CardContent>
            <Typography variant="button" color="textSecondary"  style={{fontWeight:"bold"}}>
              Fecha Factura : {fechaFactura}
              <br />
              Productos : 
              {productos.map((product)=><p>{product.nombre}</p>)}          
              Subtotal: {subtotal}
              <br />
              ISV : {isv}
              <br />
              Total : {total}
              <br/>
              Estado: {estado}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
    </>
  );
};
export default InvoiceListItemProv;
