import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Button,
  IconButton,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import UserControler from '../Controllers/UsersController';

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ getUsersList }) => {
  const [Data, setData] = useState({
    showPass: false,
    loading: false,
    error: false,
    message: '',
  });

  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    setData({
      showPass: Data.showPass,
      loading: true,
    });
    const user = new UserControler();
    const newUser = await user.registerUser(data);
    if (newUser.err) {
      setData({
        showPass: Data.showPass,
        loading: false,
        error: true,
        message: newUser.message,
      });
    }
    if (newUser.Success) {
      // agregar alerta
      getUsersList(true);
    } else {
      setData({
        showPass: Data.showPass,
        loading: false,
        error: true,
        message: newUser.Response,
      });
    }
    e.preventDefault();
  };
  const showPass = () => {
    setData({
      showPass: !Data.showPass,
    });
  };

  const inputStyles = {
    width: '100%',
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white p-4">
        <div>
          <h3 id="transition-modal-title">Registro nuevo usuario</h3>
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            autoComplete="off"
            label="Nombre"
            name="nombres"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un nombre valido',
              },
            })}
          />
          <span className="text-danger text-small mb-0">{errors?.nombres?.message}</span>
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Apellidos"
            name="apellido"
            autoComplete="off"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar al menos un apellido',
              },
            })}
          />
          <span className="text-danger text-small mb-0">{errors?.apellido?.message}</span>
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Correo"
            autoComplete="off"
            name="correo"
            type="email"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un correo valido',
              },
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: 'Debes ingresar un correo valido.',
              },
            })}
          />
          <span className="text-danger text-small mb-0">{errors?.correo?.message}</span>
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Nombre de Usuario"
            autoComplete="off"
            name="usuario"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un nombre de usuario valido',
              },
              pattern: {
                value: /^[A-Za-z][A-Za-z0-9]*$/,
                message: 'No se permiten espacios en blancos.',
              },
            })}
          />
          <span className="text-danger text-small mb-0">{errors?.usuario?.message}</span>
        </div>
        <FormControl className="mt-3" style={inputStyles}>
          <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
          <Input
            id="standard-adornment-password"
            type={Data.showPass ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={showPass} edge="end">
                  {Data.showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={80}
            name="contrasena"
            inputRef={register({
              required: {
                value: true,
                message: 'Ingresa tu contraseña',
              },
              minLength: {
                value: 8,
                message: 'De tener al menos 8 carácteres',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
                message: 'Debe contener minusculas, mayusculas, números y carácteres especiales',
              },
            })}
          />
          <span className="text-danger text-small mb-0">{errors?.contrasena?.message}</span>
        </FormControl>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            autoComplete="off"
            label="Dirección"
            placeholder="Campo opcional"
            name="direccion"
            inputRef={register}
          />
        </div>

        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="N. Identidad"
            autoComplete="off"
            name="identidad"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un número de identidad.',
              },

              pattern: {
                value: /^([0-9])*$/,
                message: 'Número invalido.',
              },
              minLength: {
                value: 13,
                message: 'Número incompleto.',
              },
              maxLength: {
                value: 13,
                message: 'Número invalido.',
              },
            })}
          />
          <span className="text-danger text-small mb-0">{errors?.identidad?.message}</span>
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            autoComplete="off"
            id="standard-basic"
            label="N. Telefono"
            name="telefono"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar el telefono.',
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
          <span className="text-danger text-small mb-0">{errors?.telefono?.message}</span>
        </div>
        <div>
          <span className="text-danger text-small mb-0">
            {Data.error ? <Alert severity="error">{Data.message}</Alert> : ''}
          </span>
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
};

export default RegisterForm;
