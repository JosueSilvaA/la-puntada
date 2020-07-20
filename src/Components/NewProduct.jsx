import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem, Select, Button, FormHelperText } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Autocomplete } from '@material-ui/lab';
import Products from '../Controllers/ProductsController';

const NewProduct = () => {
  /* Selects options */
  const [SelectOption, setSelectOption] = useState({
    providersList: ['hola'],
    productType: [
      { id: 1, name: 'Producto de textil' },
      { id: 2, name: 'Producto escolar' },
      { id: 3, name: 'Producto variado' },
    ],
    colorEscolar: [
      { code: '#FD0A00', name: 'Rojo' },
      { code: '#00ff00', name: 'Verde' },
    ],
  });
  /* Options selected */
  const [Selected, setSelected] = useState({
    selectedType: { value: false, id: '', name: '' },
    selectedProvider: { value: false, id: '', name: '' },
    selectedColor: { value: false, code: '', name: '' },
  });

  /* Render Options */
  const [TypeProductSelect, setTypeProductSelect] = useState({
    tipo1: false,
    tipo2: false,
    tipo3: false,
  });

  const { register, handleSubmit, errors } = useForm();

  const handleChangeProvider = (event) => {
    setSelected({
      selectedType: Selected.selectedType,
      // eslint-disable-next-line no-underscore-dangle
      selectedProvider: {
        value: true,
        id: event.target.value._id,
        name: event.target.value.nombre,
      },
      selectedColor: Selected.selectedColor,
    });
  };

  const chageColor = (event) => {
    SelectOption.colorEscolar.forEach((color) => {
      if (color.name === event.target.value) {
        setSelected({
          selectedType: Selected.selectedType,
          selectedProvider: Selected.selectedProvider,
          selectedColor: { value: true, code: color.code, name: event.target.value },
        });
      }
    });
  };
  const handleChangeTypeProduct = (event) => {
    setSelected({
      selectedType: { value: true, id: event.target.value.id, name: event.target.value.name },
      selectedProvider: Selected.selectedProvider,
      selectedColor: Selected.selectedColor,
    });
    if (event.target.value.id === 1) {
      setTypeProductSelect({
        tipo1: true,
        tipo2: false,
        tipo3: false,
      });
    } else if (event.target.value.id === 2) {
      setTypeProductSelect({
        tipo1: false,
        tipo2: true,
        tipo3: false,
      });
    } else {
      setTypeProductSelect({
        tipo1: false,
        tipo2: false,
        tipo3: true,
      });
    }
  };

  const getProvidersList = async () => {
    if (SelectOption.providersList[0] === 'hola') {
      const productObj = new Products();
      const providersList = await productObj.getPproviders();
      // setProveedores(providersList);
      setSelectOption({
        providersList,
        productType: SelectOption.productType,
        colorEscolar: SelectOption.colorEscolar,
      });
    }
  };

  useEffect(() => {
    getProvidersList();
  });

  const onSubmit = async (data, e) => {
    if (Selected.selectedType.value && Selected.selectedProvider.value) {
      /* Mandar a registrar el producto */
      const products = new Products();
      const result = await products.newProducto(Selected, data);
      if (result.err !== undefined) {
        /* Ocurri'o un error de conexi'on */
      } else if (result.Success) {
        alert(result.Response);
      } else if (!result.Success) {
        alert(result.Response);
      }
      console.log(result);
    } else {
      /* Faltan los campos tipoProducto y/o proveedor */
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
            <Select
              lalue={Selected.selectedType.name}
              onChange={handleChangeTypeProduct}
              label="Selecciona un tipo producto"
              // displayEmpty
            >
              <MenuItem value="" disabled>
                Selecciona el Tipo de producto
              </MenuItem>
              {SelectOption.productType.map((dato) => (
                <MenuItem value={dato} key={dato.id}>
                  {dato.name}
                </MenuItem>
              ))}
            </Select>
            {!Selected.selectedType.value && (
              <FormHelperText className="text-small text-danger">
                *Selecciona tipo de producto
              </FormHelperText>
            )}
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
          {TypeProductSelect.tipo2 && (
            <Grid item xs={11} className="mx-auto">
              <TextField
                style={{ width: '100%' }}
                id="standard-basic"
                label="Tipo Util"
                color="primary"
                name="tipoUtil"
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
          )}

          {/* Color select */}
          <Grid item xs={11} className="mx-auto">
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={SelectOption.colorEscolar}
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
                  label="Ingresa el color"
                  onBlur={chageColor}
                  margin="normal"
                  variant="standard"
                  name="color"
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Debes seleccionar un color',
                    },
                  })}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
          </Grid>

          <Grid item xs={11} className="mx-auto">
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
          </Grid>
          {(TypeProductSelect.tipo2 || TypeProductSelect.tipo3) && (
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
          )}
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
