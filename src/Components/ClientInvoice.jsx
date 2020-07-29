import React, { useState } from 'react';
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
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { PlusOne, Remove } from '@material-ui/icons';
import swal from 'sweetalert';
import SearchBar from './SearchProducts';

const ClientInvoice = () => {
  const [Open, setOpen] = useState(false);
  /* Guarda el producto seleccionado de la barra de busqueda */
  const [TempProduct, setTempProduct] = useState({ value: false, product: {}, mount: 1 });
  /* Productos seleccionados para la factura */
  const [ProductsSelected, setProductsSelected] = useState({ value: false, products: [] });
  const { register, handleSubmit, errors } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTempProduct({ value: false, product: {}, mount: 1 });
  };

  /* add product to invoice */
  const addProduct = () => {
    const prod = {
      // eslint-disable-next-line no-underscore-dangle
      producto: TempProduct.product._id,
      cantidad: TempProduct.mount,
      nombre: TempProduct.product.nombre,
    };
    setProductsSelected((prevState) => {
      return {
        value: true,
        products: prevState.products.concat([prod]),
      };
    });
    setTempProduct({ value: false, product: {}, mount: 1 });
  };

  /* update product mount */
  const updateMountPlusOne = () => {
    const tempMount = TempProduct.mount + 1;
    setTempProduct((prevState) => {
      return {
        ...prevState,
        mount: tempMount,
      };
    });
  };
  const updateMountRemoveOne = () => {
    const tempMount = TempProduct.mount - 1;
    setTempProduct((prevState) => {
      return {
        ...prevState,
        mount: tempMount,
      };
    });
  };
  const selectProduct = (data) => {
    setTempProduct({ value: true, product: data, mount: 1 });
  };
  /* 
     setProductToEdit((prevState) => {
        return { ...prevState, value: false };
      });
    */

  const onSubmit = (data, e) => {
    console.log({ productos: ProductsSelected.products, data });
    if (!ProductsSelected.value) {
      swal('Ojo', 'Se debe seleccionar al menos un producto', 'warning');
    }
  };

  return (
    <>
      {/* <ProviderInvoice /> */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }} className="mx-auto mt-5">
        <Grid container alignItems="center" spacing={3}>
          <Grid item lg={7} md={8} sm={10} xs={11} className="mx-auto">
            <Grid container alignItems="center" spacing={3}>
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
              <Grid item lg={4} md={4} sm={5} xs={11} className="mx-auto">
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
            </Grid>
          </Grid>

          <Grid item lg={5} md={4} sm={12} xs={11} className="mx-auto">
            <h2>Lista Productos</h2>
            <Grid item xl={10} lg={10} md={10} sm={10} className="mx-auto mb-3">
              <TableContainer component={Paper} className="border border-danger">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center"> Producto</TableCell>
                      <TableCell align="center"> Cantidad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ProductsSelected.products.map((element) => (
                      <TableRow key={element.producto}>
                        <TableCell align="left" component="th" scope="row">
                          {element.nombre}
                        </TableCell>
                        <TableCell align="center">{element.cantidad}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xl={10} lg={10} md={10} sm={10} className="mx-auto mb-3">
              <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className="btn-block"
              >
                Agregar productos
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} className="mt-4">
          <Grid item xl={3} lg={3} md={4} className="mx-auto mb-3">
            <Button type="submit" variant="contained" color="primary" className="btn-block">
              Registrar Factura
            </Button>
          </Grid>
        </Grid>
      </form>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
          <Grid container alignItems="center">
            <Grid item lg={7} md={10} sm={10} xs={12} className="bg-dark mx-auto">
              {!TempProduct.value ? (
                <SearchBar selectProduct={selectProduct} />
              ) : (
                <Grid item lg={12} sm={10} className="d-flex my-2 mx-auto">
                  <Button
                    size="medium"
                    color="primary"
                    variant="contained"
                    className="mx-auto"
                    onClick={() => {
                      setTempProduct({ value: false, product: {}, mount: 1 });
                    }}
                  >
                    Seleccionar otro producto
                  </Button>
                </Grid>
              )}
              {!TempProduct.value && (
                <Grid item lg={12} xs={12} style={{ marginTop: '6rem', marginBottom: '6rem' }}>
                  <span>.</span>
                </Grid>
              )}
              {TempProduct.value && (
                <Grid item lg={10} xs={10} md={4} className="mx-auto my-3">
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
                      <div className="mx-auto">
                        <IconButton
                          aria-label="delete"
                          onClick={updateMountRemoveOne}
                          color="inherit"
                          className="bg-danger"
                        >
                          <Remove />
                        </IconButton>
                        <span className="border border-danger p-3 mx-2">{TempProduct.mount}</span>
                        <IconButton
                          aria-label="delete"
                          onClick={updateMountPlusOne}
                          color="inherit"
                          className="bg-secondary"
                        >
                          <PlusOne />
                        </IconButton>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              )}
              <Grid item lg={12} className="bg-success">
                <Grid container>
                  {TempProduct.value && (
                    <Grid item lg={12} sm={10} className="d-flex my-2 mx-auto">
                      <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        className="mx-auto"
                        onClick={addProduct}
                      >
                        Agregar a la factura
                      </Button>
                    </Grid>
                  )}
                  <Grid item lg={12} sm={10} className="d-flex my-1 mx-auto">
                    <Button
                      size="medium"
                      color="secondary"
                      className="mx-auto"
                      variant="contained"
                      onClick={handleClose}
                    >
                      Cerrar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
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
export default ClientInvoice;
