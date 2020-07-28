import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Products from '../Controllers/ProductsController';

const ProviderInvoice = () => {
  const [Providers, setProviders] = useState({
    value: false,
    provider: [],
  });
  const [Open, setOpen] = useState(false);
  const [ProviderSelected, setProviderSelected] = useState({ value: false, id: '' });

  const { register, handleSubmit, errors } = useForm();

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

  const onSubmit = (data, e) => {
    console.log(data);
    console.log(ProviderSelected);
  };

  useEffect(() => {
    getProviders();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%' }} className="mx-auto">
        <Grid container alignItems="center" spacing={3}>
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
                    <MenuItem key={element._id} value={element._id}>{element.nombre}</MenuItem>
                  ))
                ) : (
                  <MenuItem value="" desabled className="text-danger" style={{ fontSize: '15px' }}>
                    Error de conexión. Intentando conectar con la Api....
                  </MenuItem>
                )}
              </Select>
            </FormControl>
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
              label="isv"
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
              label="total"
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
              label="estado"
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
          <Grid item xl={3} lg={3} md={4} className="mx-auto mb-3 bg-dark">
            <Button type="submit" variant="contained" color="primary" className="btn-block">
              Registrar Factura
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ProviderInvoice;
