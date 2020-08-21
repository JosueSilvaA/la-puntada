import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import UserCtrl from '../Controllers/UsersController';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    width: '100%',
  },
  buttonSuccess: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  buttonProgress: {
    color: 'green',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonClassname: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
}));

const ChangePassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const [ShowPass, setShowPass] = useState({ current: false, new: false, loading: false });
  const { register, handleSubmit, errors } = useForm();

  const handleClickCurrentPass = () => {
    setShowPass((prevState) => {
      return {
        ...prevState,
        current: !prevState.current,
      };
    });
  };

  const handleClickNewPass = () => {
    setShowPass((prevState) => {
      return {
        ...prevState,
        new: !prevState.new,
      };
    });
  };

  const onSubmit = async (data, event) => {
    setShowPass({ current: false, new: false, loading: true });
    event.preventDefault();
    const user = new UserCtrl();
    const result = await user.changeUserPassword(data);
    if (!result.err) {
      swal('Éxito', `${result.message}. Se procedera a cerrar la sesión.`, 'success', {
        timer: 2000,
      }).then(() => {
        history.replace('/logout');
      });
    } else {
      swal('Aviso', result.message, 'warning');
      setShowPass((prevState) => {
        return {
          ...prevState,
          loading: false,
        };
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <Grid item lg={12}>
          <FormControl className="mt-3" variant="filled">
            <InputLabel htmlFor="outlined-adornment-password">Contraseña actual</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={ShowPass.current ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickCurrentPass}
                    edge="end"
                  >
                    {ShowPass.current ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={80}
              name="currentPassword"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa tu contraseña actual',
                },
              })}
            />
            <span className="text-danger text-small mb-0">{errors?.currentPassword?.message}</span>
          </FormControl>
        </Grid>
        <Grid item lg={12}>
          <FormControl className="mt-3" variant="filled">
            <InputLabel htmlFor="outlined-adornment-password">Nueva contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={ShowPass.new ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickNewPass}
                    edge="end"
                  >
                    {ShowPass.new ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={80}
              name="newPassword"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Ingresa tu nueva contraseña',
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
          </FormControl>
        </Grid>
            <span className="text-danger text-wrap text-small mb-0" style={{width: "5rem"}}>{errors?.newPassword?.message}</span>
        <Grid item lg={12} className="d-flex">
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttonClassname}
              disabled={ShowPass.loading}
            >
              Guardar
            </Button>
            {ShowPass.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </Grid>
      </form>
    </>
  );
};
export default ChangePassword;
