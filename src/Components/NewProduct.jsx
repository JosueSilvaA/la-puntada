import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem, Select, Button, FormHelperText } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Products from '../Controllers/ProductsController';

const NewProduct = () => {
  /* Lista de Proveedores */
  const [Proveedores, setProveedores] = useState(['hola']);
  /* Proveedor seleccionado */
  const [Proveedor, setProveedor] = useState(true);
  /* Tipo de Producto a Registrar */
  const [TipoProduct, setTipoProduct] = useState({
    list: [
      { id: 1, name: 'tipo1' },
      { id: 2, name: 'tipo2' },
      { id: 3, name: 'tipo3' },
    ],
    selected: { value: false, name: 'Selecciona un tipo' },
  });
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (event) => {
    // eslint-disable-next-line no-underscore-dangle
    setProveedor(event.target.value);
  };

  const handleChangeTypeProduct = (event) => {
    setTipoProduct({
      list: TipoProduct.list,
      selected: event.target.value,
    });
  };

  const getProvidersList = async () => {
    if (Proveedores[0] === 'hola') {
      const productObj = new Products();
      const providersList = await productObj.getPproviders();
      setProveedores(providersList);
    }
  };

  useEffect(() => {
    getProvidersList();
  });

  const onSubmit = (data, e) => {
    console.log(data);
    if(Proveedor.estado === undefined){
      console.log('selecconad lsdjfl')
    }
    e.preventDefault();
  };

  return (
    <>
      <p>Insertar nuevo Producto</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '90%' }}
        className="border border-danger mx-auto"
      >
        <Grid container spacing={3} alignItems="center" className="border border-danger">
          <Grid item xs={11} className="mx-auto">
            <FormHelperText>*Selecciona tipo de producto</FormHelperText>
            <Select value={TipoProduct.selected} onChange={handleChangeTypeProduct} displayEmpty>
              <MenuItem value="" disabled>
                Selecciona el Tipo de producto
              </MenuItem>
              {TipoProduct.list.map((dato) => (
                <MenuItem value={dato}>{dato.name}</MenuItem>
              ))}
            </Select>
            <FormHelperText className="text-small text-danger">*Selecciona tipo de producto</FormHelperText>
          </Grid>

          <Grid item xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Nombre"
              color="primary"
              name="nombre"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.nombre?.message}</span>
          </Grid>
          <Grid item xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-select-currency"
              select
              label="Proveedor"
              value={Proveedor}
              onChange={handleChange}
            >
              {Proveedores.map((proveedor) => (
                <MenuItem key={proveedor.name} value={proveedor}>
                  {proveedor.nombre}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="d-none"
              id=""
              label=""
              color="primary"
              name="proveedorSelect"
              autoComplete="off"
              // eslint-disable-next-line no-underscore-dangle
              value={Proveedor._id}
              inputRef={register({
                required: {
                  value: true,
                  message: 'Selecciona un proveedor',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.proveedor?.message}</span>
          </Grid>
          <Grid item xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Marca"
              color="primary"
              name="marca"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa la marca',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.marca?.message}</span>
          </Grid>
          <Grid item xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-number"
              type="number"
              label="Precio"
              color="primary"
              // prefix="L"
              name="precio"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un precio',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.precio?.message}</span>
          </Grid>
          <Grid item xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-multiline-flexible"
              multiline
              rowsMax={4}
              label="Descripción"
              color="primary"
              name="descripcion"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un descripcion',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.descripcion?.message}</span>
          </Grid>
          <Grid item xs={11} className="mx-auto">
            <Button type="submit" variant="contained" color="primary">
              Registrar Producto
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default NewProduct;
