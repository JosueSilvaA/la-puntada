import React, { useState } from 'react';
import {
  Grid,
  Card,
  TextField,
  CardContent,
  CardActionArea,
  Button,
  CardMedia,
  CardActions,
  Typography,
  ListItemText,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Autocomplete } from '@material-ui/lab';
import SearchProduct from './SearchProducts';
import Product from '../Controllers/ProductsController';

const EditProduct = () => {
  const [ProductToEdit, setProductToEdit] = useState({
    value: false,
    product: {},
  });

  const [Editing, setEditing] = useState({
    value: false,
    type: {
      escolar: false,
      textil: false,
      variado: false,
    },
  });
  const { register, handleSubmit, errors } = useForm();

  const selectProduct = (dataProduct) => {
    setProductToEdit({ value: true, product: dataProduct });
  };

  const editP = () => {
    setProductToEdit((prevState) => {
      return { ...prevState, value: false };
    });
    if (ProductToEdit.product.tipoUtil !== undefined) {
      setEditing({
        value: true,
        type: { escolar: true, textil: false, variado: false },
      });
    }
  };

  const onSubmit = async (data, event) => {
    const product = new Product();
    const dataProduct = {
      id: ProductToEdit.product._id,
      type: Editing.type,
      data,
    };
    const result = await product.Edit(dataProduct);
    if (!result.err) {
      setEditing({
        value: false,
        type: {
          escolar: false,
          textil: false,
          variado: false,
        },
      });
      setProductToEdit({
        value: false,
        product: {},
      });
    }
    event.preventDefault();
  };

  return (
    <>
      <SearchProduct selectProduct={selectProduct} />

      {ProductToEdit.value && (
        <Grid item xs={10} md={4} className="mx-auto mt-4">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Imagen del producto"
                height="140"
                src={ProductToEdit.product.imgProducto}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {ProductToEdit.product.nombre}
                </Typography>
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Marca :
                      </Typography>
                      {ProductToEdit.product.marca}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Precio :
                      </Typography>
                      {ProductToEdit.product.precio}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Tipo Util :
                      </Typography>
                      {ProductToEdit.product.tipoUtil}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Descripción :
                      </Typography>
                      {ProductToEdit.product.descripcion}
                    </>
                  }
                />
                <ListItemText
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Color :
                      </Typography>
                      {ProductToEdit.product.color}
                    </>
                  }
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className="mx-auto" onClick={editP}>
                Editar Producto
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}

      {Editing.value && (
        <Grid
          container
          spacing={3}
          alignItems="center"
          className="mt-4 mx-auto"
          style={{ width: '90%' }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '90%' }}
            className="border border-danger mx-auto"
          >
            <Grid container spacing={3} alignItems="center" className="border border-danger">
              {/* <Grid item xs={11} className="mx-auto">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Tipo de producto</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-simple-select-label"
                lalue={Selected.selectedType.name}
                onChange={handleChangeTypeProduct}
              >
                {SelectOption.productType.map((productType) => (
                  <MenuItem key={productType.id} value={productType}>
                    {productType.name}
                  </MenuItem>
                ))}
              </Select>
              {!Selected.selectedType.value && (
                <FormHelperText className="text-small text-danger">
                  *Selecciona tipo de producto
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
 */}
              <Grid item xs={11} className="mx-auto">
                <TextField
                  style={{ width: '100%' }}
                  id="standard-basic"
                  label="Nombre"
                  color="primary"
                  defaultValue={ProductToEdit.product.nombre}
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
              {(Editing.type.escolar || Editing.type.variado) && (
                <Grid item xs={11} className="mx-auto">
                  <TextField
                    style={{ width: '100%' }}
                    id="standard-basic"
                    label="Marca"
                    color="primary"
                    name="marca"
                    defaultValue={ProductToEdit.product.marca}
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
              )}

              {/* Product Type Escolar */}
              {Editing.type.escolar && (
                <>
                  <Grid item xs={11} className="mx-auto">
                    <TextField
                      style={{ width: '100%' }}
                      id="standard-basic"
                      label="Tipo Util"
                      color="primary"
                      name="tipoUtil"
                      defaultValue={ProductToEdit.product.tipoUtil}
                      autoComplete="off"
                      inputRef={register({
                        required: {
                          value: true,
                          message: 'Ingresa el tipoUtil',
                        },
                      })}
                    />
                    <span className="text-small text-danger">{errors?.tipoUtil?.message}</span>
                  </Grid>
                </>
              )}
              {Editing.type.textil && (
                <>
                  <Grid item xs={11} className="mx-auto">
                    <TextField
                      style={{ width: '100%' }}
                      id="standard-basic"
                      label="Tipo textil"
                      color="primary"
                      name="tipoTextil"
                      defaultValue={ProductToEdit.product.tipoTextil}
                      autoComplete="off"
                      inputRef={register({
                        required: {
                          value: true,
                          message: 'Ingresa el tipoTextil',
                        },
                      })}
                    />
                    <span className="text-small text-danger">{errors?.tipoTextil?.message}</span>
                  </Grid>
                </>
              )}
              {Editing.type.variado && (
                <Grid item xs={11} className="mx-auto">
                  <TextField
                    style={{ width: '100%' }}
                    id="standard-basic"
                    label="Tipo Variado"
                    color="primary"
                    name="tipoVariado"
                    defaultValue={ProductToEdit.product.tipoVariado}
                    autoComplete="off"
                    inputRef={register({
                      required: {
                        value: true,
                        message: 'Ingresa el tipoUtil',
                      },
                    })}
                  />
                  <span className="text-small text-danger">{errors?.tipoVariado?.message}</span>
                </Grid>
              )}

              {/* Color select */}
              {(Editing.type.textil || Editing.type.escolar) && (
                <Grid item xs={11} className="mx-auto">
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={[
                      { code: '#FD0A00', name: 'Rojo' },
                      { code: '#00ff00', name: 'Verde' },
                    ]}
                    getOptionLabel={(option) => option.name}
                    renderOption={(option) => (
                      <>
                        {option.name}
                        <span
                          style={{
                            paddingLeft: 'auto',
                            width: '20px',
                            height: '20px',
                            background: option.code,
                          }}
                        />
                      </>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Selecciona el color"
                        // onBlur={chageColor}
                        margin="normal"
                        placeholder={`Color actual ${ProductToEdit.product.color}`}
                        variant="standard"
                        name="color"
                        inputRef={register({
                          required: {
                            value: false,
                            message: 'Debes seleccionar un color',
                          },
                        })}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                      />
                    )}
                  />
                  <span className="text-small text-danger">{errors?.color?.message}</span>
                </Grid>
              )}
              {/* <Grid item xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-select-currency"
              select
              label="Proveedor"
              lalue={Selected.selectedProvider.name}
              onChange={handleChangeProvider}
            >
              {SelectOption.providersList.map((proveedor) => (
                <MenuItem key={proveedor.nombre} value={proveedor}>
                  {proveedor.nombre}
                </MenuItem>
              ))}
            </TextField>
            {!Selected.selectedProvider.value && (
              <FormHelperText className="text-small text-danger">
                *Selecciona un proveedor
              </FormHelperText>
            )}
          </Grid> */}
              <Grid item xs={11} className="mx-auto">
                <TextField
                  style={{ width: '100%' }}
                  id="standard-number"
                  type="number"
                  label="Precio"
                  color="primary"
                  // prefix="L"
                  name="precio"
                  defaultValue={ProductToEdit.product.precio}
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
                  defaultValue={ProductToEdit.product.descripcion}
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
              <Grid item xs={10} className="mx-auto">
                <Button type="submit" variant="contained" className="mx-auto" color="primary">
                  Editar Producto
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      )}
    </>
  );
};
export default EditProduct;
