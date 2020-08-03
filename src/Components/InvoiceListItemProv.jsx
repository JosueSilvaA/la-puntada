import React from 'react';
import {
  Grid,
  Typography,
  Card, CardHeader, CardContent
} from '@material-ui/core';
// eslint-disable-next-line react/prop-types
const InvoiceListItemProv = ({ prove, fechaFactura,creada,estado, productos,subtotal,isv}) => {
  

    return (
    <>
    <Grid item xs={12} sm={6} md={4} lg={3} style={{padding:'10px'}}>
        <Card style={{cursor:"default"}}>
          <CardHeader
            
            title={prove}
            subheader={creada}
          />
          
          <CardContent>
            <Typography variant="button" color="textSecondary"  style={{fontWeight:"bold"}}>
              Fecha Factura : {fechaFactura}
              <br />
              Productos : 
              <br />              
              Subtotal: 
              <br />
              ISV : 
              <br />
              Total : 
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