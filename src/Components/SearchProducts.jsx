import React, { useState, useEffect } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { TextField, Grid } from '@material-ui/core';
import ProductController from '../Controllers/ProductsController';

// eslint-disable-next-line react/prop-types
const SearchInventory = ({ selectProduct }) => {
  const [Products, setProducts] = useState([0]);
  const [Connection, setConnection] = useState(false);

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (product) => product.nombre,
  });

  const getProductsList = async () => {
    const Product = new ProductController();
    const result = await Product.getProductsLIst();
    if (!result.err) {
      setProducts(result.items);
      setConnection(true);
    }
  };
  useEffect(() => {
    if (Products[0] === 0) {
      getProductsList();
    }
  });

  const selectOneProduct = () => {
    const selectedProduct = document.getElementById('select');
    setTimeout(() => {
      Products.forEach((product) => {
        if (product.nombre === selectedProduct.value) {
          selectProduct(product);
        }
      });
    }, 50);
  };

  return (
    <>
      <Grid item xs={10} md={6} className="mx-auto mt-3">
        <Autocomplete
          className="d-block"
          id="select"
          onClose={selectOneProduct}
          options={Connection ? Products : [{ nombre: 'ha ocurrido un error.' }]}
          getOptionLabel={(product) => product.nombre}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              disabled={Connection}
              label="Buscar Producto"
              variant="standard"
            />
          )}
        />
      </Grid>
    </>
  );
};
export default SearchInventory;
