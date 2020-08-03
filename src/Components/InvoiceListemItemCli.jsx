import React from 'react';
import {
  Grid,
  Typography,
  Card, CardHeader, CardContent
} from '@material-ui/core';
// eslint-disable-next-line react/prop-types
const InvoiceListItemCli = ({cliente,rtn,telefono,direccion,fechaFactura, nombreEmp,creada }) => {
  

    return (
    <>
    <Grid item xs={12} sm={6} md={4} lg={3} style={{padding:'10px'}}>
        <Card style={{cursor:"default"}}>
          <CardHeader
            
            title={cliente}//nombreCliente
            subheader={creada}//creada
          />
          
          <CardContent>
            <Typography variant="button" color="textSecondary"  style={{fontWeight:"bold"}}>
              Fecha Factura : {fechaFactura}
              <br />
              RTN:{rtn}
              <br />
              Telefono:{telefono}
              <br />
              Direccion:{direccion}
              <br />
              Productos : 
              <br />  
              Nombre Empleado:{nombreEmp}
              <br />            
              Subtotal: 
              <br />
              ISV : 
              <br />
              Total : 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
    </>
  );
};
export default InvoiceListItemCli;
