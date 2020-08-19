import React from 'react';
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import "../Styles/Catalogue.css";

const ProductListItemSchool = ({ product }) => {
  const dateFormat = (data) => {
    let date = data;
    moment.locale('es');
    date = moment().format('LL');
    return date;
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} style={{padding:'10px',margin:'5px'}}>
        <Card style={{cursor:"default"}}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={product.nombre}
            subheader={dateFormat(product.creada)}
          />
          <img
            src={product.imgProducto}
            title="Paella dish"
            className = 'imagen-tarjeta'
            alt={product.nombre}
          />
          <CardContent>
            <Typography variant="button" color="textSecondary" component="p" style={{fontWeight:"bold"}}>
              Descripcion : {product.descripcion}
              <br />
              Color : {product.color}
              <br />
              Marca : {product.marca}
              <br />
              Tipo Producto : {product.tipoUtil}
              <br />
              Precio : {product.precio} lps
              <br/>
              Cantidad : {product.cantidad}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ProductListItemSchool;
