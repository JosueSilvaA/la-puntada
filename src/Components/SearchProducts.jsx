import React, { useState, useEffect } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import {
  TextField,
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
import ProductController from '../Controllers/ProductsController';

const SearchInventory = () => {
  const [Products, setProducts] = useState([0]);
  const [SearchF, setSearchF] = useState({ value: false, product: [] });

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (product) => product.nombre,
  });

  const getProductsList = async () => {
    const Product = new ProductController();
    const result = await Product.getProductsLIst();
    setProducts(result.items);
  };
  useEffect(() => {
    if (Products[0] === 0) {
      getProductsList();
    }
  });

  const prueba = () => {
    const selectedProduct = document.getElementById('select');
    setTimeout(() => {
      Products.forEach((product) => {
        if (product.nombre === selectedProduct.value) {
          setSearchF({ value: true, product: [product] });
        }
      });
    }, 50);
  };

  return (
    <>
      <Grid item xs={10} className="mx-auto">
        <Autocomplete
          className="d-block"
          id="select"
          onClose={prueba}
          options={Products}
          getOptionLabel={(product) => product.nombre}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField {...params} label="Buscar Producto" variant="standard" />
          )}
        />
      </Grid>

      {SearchF.value && (
        <Grid item xs={10} md={4} className="mx-auto mt-3">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                src="https://rockcontent.com/es/wp-content/uploads/2019/02/ejemplos-de-merchandising-1280x720.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {SearchF.product[0].nombre}
                </Typography>
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Marca : 
                      </Typography>
                      {SearchF.product[0].marca}
                    </>
                  }
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className="mx-auto">
                Eliminar Producto
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};
export default SearchInventory;
