import React, { useState, useEffect } from 'react';
import {
  Grid,
  CardActions,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ListItemText,
  Button,
  TextField,
  Modal,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import ProviderInvoice from '../Components/ProviderInvoice';
import SearchBar from '../Components/SearchProducts';
import ProductController from '../Controllers/ProductsController';

const Invoices = () => {
  const [Open, setOpen] = useState(true);
  /* Guarda el producto seleccionado de la barra de busqueda */
  const [TempProduct, setTempProduct] = useState({ value: false, product: {}, mount: 1 });
  const [Connection, setConnection] = useState(false);
  /* Productos seleccionados para la factura */
  const [ProductsSelected, setProductsSelected] = useState({ value: false, products: [] });
  const { register, handleSubmit, errors } = useForm();

  /* add product to invoice */
  const addProduct = () => {
    const prod = {
      producto: TempProduct.product,
      cantidad: TempProduct.mount,
    };
    setProductsSelected((prevState) => {
      return {
        value: true,
        products: prevState.products.concat([prod]),
      };
    });
  };

  /* update product mount */
  const updateMount = () => {
    const tempMount = TempProduct.mount + 1;
    setTempProduct((prevState) => {
      return {
        ...prevState,
        mount: tempMount,
      };
    });
  };

  const selectProduct = (data) => {
    console.log(data);
    setTempProduct({ value: true, product: data, mount: 1 });
  };
  /* 
   setProductToEdit((prevState) => {
      return { ...prevState, value: false };
    });
  */

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data, e) => {
    console.log(data);
  };

  return (
    <>
      {/* <ProviderInvoice /> */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }} className="mx-auto">
        <Grid container alignItems="center" spacing={3}>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Nombre Cliente"
              color="primary"
              name="nombreCliente"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.nombreCliente?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="RTN factura"
              color="primary"
              name="rtn"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa el rtn de la factura.',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.rtn?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Telefono"
              color="primary"
              name="telefono"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.telefono?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Dirección"
              color="primary"
              name="direccion"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa la dirección.',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.direccion?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Fecha de Factura"
              color="primary"
              name="fechaFactura"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.fechaFactura?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Nombre del empleado"
              color="primary"
              name="nombreEmpleado"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.nombreEmpleado?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="subTotal"
              color="primary"
              name="subTotal"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.subTotal?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="ISV"
              color="primary"
              name="isv"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.isv?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Total"
              color="primary"
              name="total"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.total?.message}</span>
          </Grid>
          <Grid item lg={4} md={3} sm={10} xs={11} className="mx-auto">
            <TextField
              style={{ width: '100%' }}
              id="standard-basic"
              label="Estado"
              color="primary"
              name="estado"
              autoComplete="off"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa un nombre',
                },
              })}
            />
            <span className="text-small text-danger">{errors?.estado?.message}</span>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} className="mt-4">
          <Grid item xl={3} lg={3} md={4} className="mx-auto mb-3">
            <Button type="submit" variant="contained" color="primary" className="btn-block">
              Registrar Factura
            </Button>
          </Grid>
        </Grid>
        <Button onClick={handleOpen} variant="contained" color="primary" className="btn-block">
          Agregar productos
        </Button>
      </form>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grid container alignItems="center" className="bg-danger">
          <Grid item lg={6} sm={10} xm={11} className="mx-auto bg-white">
            <SearchBar selectProduct={selectProduct} />
          </Grid>

          <Grid item xs={10} md={4} className="mx-auto mt-3">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Imagen del producto"
                  height="140"
                  src={TempProduct.product.imgProducto}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {TempProduct.product.nombre}
                  </Typography>
                  <ListItemText
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Marca :
                        </Typography>
                        {TempProduct.product.marca}
                      </>
                    }
                  />
                  <ListItemText
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Precio :
                        </Typography>
                        {TempProduct.product.precio}
                      </>
                    }
                  />
                  <ListItemText
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Tipo producto :
                        </Typography>
                        {TempProduct.product.tipoUtil}
                        {TempProduct.product.tipoTextil}
                        {TempProduct.product.tipoVariado}
                      </>
                    }
                  />
                  <ListItemText
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Descripción :
                        </Typography>
                        {TempProduct.product.descripcion}
                      </>
                    }
                  />
                  <ListItemText
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Color :
                        </Typography>
                        {TempProduct.product.color}
                      </>
                    }
                  />
                </CardContent>
              </CardActionArea>
              <CardActions>
                {TempProduct.value ? (
                  <span>{TempProduct.mount}</span>
                ) : (
                  <Button size="medium" color="primary" className="mx-auto" onClick={updateMount}>
                    Seleccionar Producto
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Modal>
      {/* 
   
    productos:{
        type:mongoose.SchemaTypes.Array,
        required:true
    }
      */}
    </>
  );
};
export default Invoices;
