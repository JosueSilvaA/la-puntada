import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  CardActions,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ListItemText,
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
import Helmet from 'react-helmet';
import { PlusOne, Remove } from '@material-ui/icons';
import swal from 'sweetalert';
import SearchBar from './SearchProducts';
import NavBar from './Navbar';

import Products from '../Controllers/ProductsController';
import InvoiceController from '../Controllers/InvoiceCotroller';

const ProviderInvoice = () => {
  const [Providers, setProviders] = useState({
    value: false,
    provider: [],
  });
  const [Open, setOpen] = useState(false);
  const [ProviderSelected, setProviderSelected] = useState({ value: false, id: '' });
  /* Product from search bar */
  const [TempProduct, setTempProduct] = useState({ value: false, product: {}, mount: 1 });
  /* Products Invoice */
  const [ProductsSelected, setProductsSelected] = useState({ value: false, products: [] });
  /* Modal control */
  const [OpenModal, setOpenModal] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm();
  const history = useHistory();

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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

  const getProviders = async () => {
    const product = new Products();
    const result = await product.getPproviders();
    if (!result.err) {
      setProviders({ value: true, provider: result });
    }
  };
  const handleChange = (event) => {
    setProviderSelected({ value: true, id: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = async (data, e) => {
    if (!ProviderSelected.value) {
      swal('Ojo', 'Se debe seleccionar el proveedor', 'warning');
    } else if (!ProductsSelected.value) {
      swal('Ojo', 'Se debe seleccionar al menos un producto', 'warning');
      console.log(data);
    } else {
      const invoice = new InvoiceController();
      const result = await invoice.saveProviderInvoice({
        data,
        idProveedor: ProviderSelected.id,
        productos: ProductsSelected.products,
      });
      if (!result.err) {
        swal('Éxito', result.message, 'success', { timer: 2000 }).then(() => {
          history.replace('/main');
        });
      } else {
        swal('Error', result.message, 'error');
      }
    }
  };

  useEffect(() => {
    getProviders();
  }, []);

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #838383' }} />
      <NavBar pageName="Factura Proveedor" goBack />
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }} className="mx-auto mt-4">
        <Grid container alignItems="center" spacing={3} style={{ background: '#eeeeee' }}>
          <Grid item lg={7} md={8} sm={10} xs={11} className="mx-auto">
            <Grid container alignItems="center" spacing={4}>
              <Grid item lg={4} md={4} sm={10} xs={11} className="mx-auto">
                <FormControl style={{ width: '100%' }}>
                  <InputLabel id="demo-controlled-open-select-label">Proveedor</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    open={Open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={ProviderSelected.id}
                    onChange={handleChange}
                  >
                    {Providers.value ? (
                      Providers.provider.map((element) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <MenuItem key={element._id} value={element._id}>
                          {element.nombre}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem
                        value=""
                        disabled
                        className="text-danger"
                        style={{ fontSize: '15px' }}
                      >
                        Error de conexión. Intentando conectar con la Api....
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
                {!ProviderSelected.value && (
                  <FormHelperText className="text-small text-danger">
                    *Selecciona el proveedor.
                  </FormHelperText>
                )}
              </Grid>
              <Grid item lg={4} md={3} sm={6} xs={11} className="mx-auto">
                <span style={{ color: '#007bff', fontSize: '12px' }}>Fecha Factura</span>
                <TextField
                  style={{ width: '100%' }}
                  id="standard-basic"
                  // label="Fecha de Factura"
                  type="Date"
                  color="primary"
                  name="fechaFactura"
                  autoComplete="off"
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Ingresa la fecha de la factura.',
                    },
                  })}
                />
                <span className="text-small text-danger">{errors?.fechaFactura?.message}</span>
              </Grid>
              <Grid item lg={4} md={3} sm={6} xs={11} className="mx-auto">
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
                      message: 'Ingresa el subTotal.',
                    },
                    pattern: {
                      value: /^([0-9])*$/,
                      message: 'Dato invalido.',
                    },
                    min: {
                      value: 0,
                      message: 'El valor no puede ser negativo.',
                    },
                  })}
                />
                <span className="text-small text-danger">{errors?.subTotal?.message}</span>
              </Grid>
              <Grid item lg={4} md={3} sm={6} xs={11} className="mx-auto">
                <TextField
                  style={{ width: '100%' }}
                  id="standard-basic"
                  label="isv"
                  color="primary"
                  name="isv"
                  autoComplete="off"
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Ingresa el ISV.',
                    },
                    pattern: {
                      value: /^([0-9])*$/,
                      message: 'Dato invalido.',
                    },
                    min: {
                      value: 0,
                      message: 'El valor no puede ser negativo.',
                    },
                  })}
                />
                <span className="text-small text-danger">{errors?.isv?.message}</span>
              </Grid>
              <Grid item lg={4} md={3} sm={6} xs={11} className="mx-auto">
                <TextField
                  style={{ width: '100%' }}
                  id="standard-basic"
                  label="total"
                  color="primary"
                  name="total"
                  value={parseFloat(watch('subTotal')) + parseFloat(watch('isv'))}
                  autoComplete="off"
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Ingresa el total.',
                    },
                    pattern: {
                      value: /^([0-9])*$/,
                      message: 'Dato invalido.',
                    },
                    min: {
                      value: 0,
                      message: 'El valor no puede ser negativo.',
                    },
                  })}
                />
                <span className="text-small text-danger">{errors?.total?.message}</span>
              </Grid>
              <Grid item lg={4} md={3} sm={6} xs={11} className="mx-auto">
                <TextField
                  style={{ width: '100%' }}
                  id="standard-basic"
                  label="estado"
                  color="primary"
                  name="estado"
                  autoComplete="off"
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Ingresa el estado.',
                    },
                    pattern: {
                      value: /^[A-Za-z][A-Za-z0-9]*$/,
                      message: 'No se permiten espacios en blancos.',
                    },
                  })}
                />
                <span className="text-small text-danger">{errors?.estado?.message}</span>
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
                onClick={handleOpenModal}
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
        open={OpenModal}
        onClose={handleCloseModal}
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
                      onClick={handleCloseModal}
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
    </>
  );
};

export default ProviderInvoice;
