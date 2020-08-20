/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { Grid, Typography, Card, CardHeader, CardContent } from '@material-ui/core';

const InvoiceListItemProv = ({
  prove,
  fechaFactura,
  creada,
  estado,
  productos,
  subtotal,
  isv,
  total,
}) => {
  const fecha = moment(fechaFactura).format('DD-MM-YYYY HH:mm');
  const fechaCreada = moment(creada).format('DD-MM-YYYY HH:mm');

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ padding: '10px' }}>
        <Card style={{ cursor: 'default' }}>
          <CardHeader title={prove} subheader={fechaCreada} />

          <CardContent>
            <Typography variant="button" color="textSecondary" style={{ fontWeight: 'bold' }}>
              Fecha Factura : {fecha}
              <br />
              <br />
              <div className="d-flex">
                <div style={{ width: '50%', textAlign: 'center' }}>Productos</div>
                <div style={{ width: '25%', textAlign: 'right' }}>Cantidad</div>
                <div style={{ width: '25%', textAlign: 'right' }}>Precio</div>
              </div>
              <br />
              {productos.map((product) => (
                <>
                  <div className="d-flex">
                    <div style={{ width: '60%', textAlign: 'center' }}> # {product.nombre}</div>
                    <div style={{ width: '25%', textAlign: 'right' }}>{product.cantidad}</div>
                    <div style={{ width: '25%', textAlign: 'right' }}>{product.precio}</div>
                  </div>
                </>
              ))}
              <br />
              <div className="d-flex">
                <div style={{ width: '60%', textAlign: 'right' }}>Subtotal</div>
                <div style={{ width: '40%', textAlign: 'right' }}>{subtotal}</div>
              </div>
              <div className="d-flex">
                <div style={{ width: '60%', textAlign: 'right' }}>ISV</div>
                <div style={{ width: '40%', textAlign: 'right' }}>{isv}</div>
              </div>
              <div className="d-flex">
                <div style={{ width: '60%', textAlign: 'right' }}>Total</div>
                <div style={{ width: '40%', textAlign: 'right' }}>{total}</div>
              </div>
              <div className="d-flex">
                <div style={{ width: '50%', textAlign: 'right' }}>Estado</div>
                <div style={{ width: '50%', textAlign: 'right' }}>{estado}</div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default InvoiceListItemProv;
