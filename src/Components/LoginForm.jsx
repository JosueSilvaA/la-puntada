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
import Logo from '../logo.svg';
import LoginController from '../Controllers/loginController';

const LoginForm = () => {
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
    const respuesta = await Login.Autenticar(data.usuario, data.password);
    if (respuesta.status === 200) {
      history.push('/main');
    } else {
      setData({
        loading: false,
        showPass: Data.showPass,
      });
    }
  };

  const onClick = () => {
    setData({
      showPass: !Data.showPass,
      loading: Data.loading,
    });
  };

  return (
    <>
      <div className="mx-auto col-lg-4 col-sm-8  d-flex justify-content-center">
        <Card className="bg-gray">
          <div>
            <img src={Logo} alt="" />
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
                <Checkbox
                  /*     checked={checked}
                                        onChange={handleChange} */
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
                  color="secondary"
                  className="btn-block mt-3"
                  disabled={!!Data.loading}
                >
                  {Data.loading && <i className="fa fa-refresh fa-spin" />}
                  Login
                </Button>
              </div>
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
