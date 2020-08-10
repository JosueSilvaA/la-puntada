import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  Checkbox,
  Button,
  Card,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  CardContent,
} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import LoginController from '../Controllers/loginController';

const LoginForm = ({ changeAuth }) => {
  const [Data, setData] = useState({ showPass: false, loading: false, error: '' });
  const history = useHistory();
  const inputStyles = {
    width: '100%',
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setData({
      showPass: Data.showPass,
      loading: true,
    });
    const Login = new LoginController();
    const respuesta = await Login.Autenticar(data.usuario, data.password, data.remember);
    if (respuesta.Error) {
      setData({
        loading: false,
        showPass: Data.showPass,
        error: respuesta.Error,
      });
    } else {
      changeAuth();
      history.push('/main');
    }
  };

  const onClick = () => {
    setData((prevState) => {
      return {
        ...prevState,
        showPass: !Data.showPass,
      };
    });
  };

  return (
    <>
      <div className="mx-auto col-lg-4 col-sm-8  d-flex justify-content-center">
        <Card className="bg-gray">
          <div style={{ textAlign: 'center', marginTop: '5vh' }}>
            <br />
            <i className="fas fa-user-circle fa-10x" style={{ color: '#39a8bf' }} />
          </div>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                style={inputStyles}
                id="outlined"
                label="Nombre de usuario"
                variant="outlined"
                color="primary"
                className="mt-3"
                name="usuario"
                autoComplete="off"
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Ingresa nombre de usuario',
                  },
                })}
              />
              <span className="text-danger text-small mb-0">{errors?.usuario?.message}</span>
              <FormControl className="mt-3" variant="outlined" style={inputStyles}>
                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={Data.showPass ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onClick}
                        edge="end"
                      >
                        {Data.showPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={80}
                  name="password"
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Ingresa tu contraseña',
                    },
                  })}
                />
                <span className="text-danger text-small mb-0">{errors?.password?.message}</span>
              </FormControl>
              <div>
                <br />
                <Checkbox
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  name="remember"
                  inputRef={register}
                />
                <span className="text-success" style={{ marginLeft: '-10px' }}>
                  Mantener sesión
                </span>
                <Button
                  type="submit"
                  variant="contained"
                  className="btn-block mt-3"
                  disabled={!!Data.loading}
                  style={{ backgroundColor: '#39a8bf', color: 'white',minHeight:'2.5rem'}}
                >
                  {Data.loading && <i className="fa fa-refresh fa-spin"/>}
                  {!Data.loading && 'Login'}
                </Button>
              </div>
              <br />
              {Data.error ? <Alert severity="error">{Data.error}</Alert> : ''}
            </form>
            `
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
