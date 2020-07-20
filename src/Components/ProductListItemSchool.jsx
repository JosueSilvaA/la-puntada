import React from 'react';
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ProductListItemSchool = ({ product }) => {
  return (
    <>
      <Grid item xs={12} md={4} style={{ padding: '2%' }}>
        <Card>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={product.nombre}
            subheader={product.creada}
          />
          <img
            src={product.imgProducto}
            title="Paella dish"
            style={{ backgroundPosition: 'center center', backgroundSize: 'cover', width: '100%' }}
            alt={product.nombre}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Descripcion : {product.descripcion}
              <br />
              Color : {product.color}
              <br />
              Marca : {product.marca}
              <br />
              Tipo Producto : {product.tipoUtil}
              <br />
              Precio : {product.precio} lps
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ProductListItemSchool;
