import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  CardMedia,
  CardActions,
  Typography,
  ListItemText,
} from '@material-ui/core';
import SearchProduct from './SearchProducts';
import Product from '../Controllers/ProductsController';

const DeleteProduct = ({ idProduct = '0' }) => {
  const [ProducSelected, setProducSelected] = useState({ value: false, product: {} });

  const selectProduct = (dataProduct) => {
    setProducSelected({ value: true, product: dataProduct });
  };

  const deleteP = async () => {
    const productControl = new Product();
    const result = await productControl.delete(ProducSelected.product._id);
    if (!result.err) {
      setProducSelected({ value: false, product: {} });
    }
  };

  const getProductById = async () => {
    const product = new Product();
    const result = await product.GetProductById(idProduct);
    if (!result.err) {
      setProducSelected({ value: true, product: result.items });
    }
  };

  useEffect(() => {
    if (idProduct !== '0' && ProducSelected.value === false) {
      getProductById();
    }
  });

  return (
    <>
      <SearchProduct selectProduct={selectProduct} idProduct={idProduct} />
      {ProducSelected.value && (
        <Grid item xs={10} md={4} className="mx-auto mt-3">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Imagen del producto"
                height="140"
                src={ProducSelected.product.imgProducto}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {ProducSelected.product.nombre}
                </Typography>
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Marca :
                      </Typography>
                      {ProducSelected.product.marca}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Precio :
                      </Typography>
                      {ProducSelected.product.precio}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Tipo Util :
                      </Typography>
                      {ProducSelected.product.tipoUtil}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Descripción :
                      </Typography>
                      {ProducSelected.product.descripcion}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Color :
                      </Typography>
                      {ProducSelected.product.color}
                    </>
                  }
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className="mx-auto" onClick={deleteP}>
                Eliminar Producto
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};
export default DeleteProduct;
