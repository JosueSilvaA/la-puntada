import React, { useState } from 'react'
import ProviderController from '../Controllers/ProvidersController'
import { useForm } from 'react-hook-form';
import {
    TextField,
    FormControl,
    Button,
    IconButton,
    InputLabel,
    Input,
    InputAdornment,
    MenuItem,
    Select,
  } from '@material-ui/core';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


const NewProvider = (props) => {
    const history = useHistory();
      // eslint-disable-next-line no-unused-vars
      const { register, handleSubmit, errors } = useForm();
      const [TipoProducto, setTipoProducto] = useState({select:false,value:''})
      const [Data, setData] = useState({
        showPass: false,
        loading: false,
        error: false,
        message: '',
      });
      
      const onSubmit = async (data, e) => {
        const providerService = new ProviderController();
        if(TipoProducto.select){
          const newProvider = await providerService.newProvider(data,TipoProducto.value);
          if(newProvider.Error === false){
              setData({
                  loading:true
              })
              swal('Éxito',newProvider.Response, 'success', { timer: 2000 }).then(() => {
                  props.providers();
              });
          }else{
              swal('Error', newProvider.Response, 'error');
          }
        }
        e.preventDefault();
      };

      const handleChange = (event) => {
        setTipoProducto({select:true,value:event.target.value});
      };
    
      return (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white p-4">
            <div>
              <h3 id="transition-modal-title">Registro Proveedor</h3>
            </div>
            <div className="mt-3 mb-5">
              <TextField
                style={{width:'100%'}}
                id="standard-basic"
                autoComplete="off"
                label="Nombre Proveedor"
                name="nombre"
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Ingrese un nombre',
                  },
                })}
              />
              <span className="text-danger text-small mb-0">{errors?.nombre?.message}</span>
            </div>
            <div className="mt-3 mb-5">
                <TextField
                    style={{ width: '100%' }}
                    id="standard-basic"
                    label="RTN de Proveedor"
                    color="primary"
                    name="rtn"
                    autoComplete="off"
                    inputRef={register({
                        required: {
                        value: true,
                        message: 'Ingresa el rtn de la factura.',
                        },
                        pattern: {
                        value: /^([0-9])*$/,
                        message: 'RTN invalido.',
                        },
                        minLength: {
                        value: 13,
                        message: 'RTN incompleto.',
                        },
                        maxLength: {
                        value: 13,
                        message: 'RTN invalido.',
                        },
                    })}
                />
                <span className="text-small text-danger">{errors?.rtn?.message}</span>
            </div>
            <div className="mt-3 mb-5">
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
                        message: 'Ingresa el número de telefono.',
                        },
                        pattern: {
                        value: /^([0-9])*$/,
                        message: 'Telefono invalido.',
                        },
                        minLength: {
                        value: 8,
                        message: 'Telefono incompleto.',
                        },
                        maxLength: {
                        value: 8,
                        message: 'Telefono invalido.',
                        },
                    })}
                />
                <span className="text-small text-danger">{errors?.telefono?.message}</span>
            </div>
            <div className="mt-3 mb-5">
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
            </div>
            <div className="mt-3 mb-5">
                <FormControl style={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-label">Tipo de Producto</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={TipoProducto.value}
                    onChange={handleChange}
                    >
                    <MenuItem value='Producto Textil'>Producto Textil</MenuItem>
                    <MenuItem value='Producto Escolar'>Producto Escolar</MenuItem>
                    <MenuItem value='Producto Variado'>Producto Variado</MenuItem>
                    </Select>
                    <span className="text-small text-danger">{ !TipoProducto.select ? 'Seleccione un tipo de producto': ''}</span>
                </FormControl>
            </div>
            <div className="mt-5">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="btn-block"
                    disabled={Data.loading}
                >
                    {Data.loading && <i className="fa fa-refresh fa-spin" />}
                    Registrar
                </Button>
            </div>
          </form>
        </>
      );
}

export default NewProvider;
