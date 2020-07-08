import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import UserControler from '../Controllers/UsersController';

const RegisterForm = () => {
  const [Data, setData] = useState(false);

  /* 
  nombres:req.body.nombres,
            apellido:req.body.apellido,
            usuario:req.body.usuario,
            direccion:req.body.direccion,
            correo:req.body.correo,
            contrasena:req.body.contrasena,
            identidad:req.body.identidad,
            telefono:req.body.telefono,
            estado:req.body.estado,
            conexiones:[]
  */
  const onSubmit = async (data, e) => {
    const user = new UserControler();
    const newUser = await user.registerUser({ h: 'jkj' });
    console.log(newUser);
    e.preventDefault();
  };

  const inputStyles = {
    width: '100%',
  };

  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white p-4">
        <div>
          <h2 id="transition-modal-title">Registro nuevo usuario</h2>
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Nombre"
            name="nombres"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un nombre valido',
              },
            })}
          />
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Apellidos"
            name="apellido"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar al menos un apellido',
              },
            })}
          />
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Correo"
            name="correo"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un correo valido',
              },
            })}
          />
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Nombre de Usuario"
            name="usuario"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un nombre de usuario valido',
              },
            })}
          />
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="Dirección"
            name="direccion"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar una dirección',
              },
            })}
          />
        </div>

        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="N. Identidad"
            name="identidad"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar un número de identidad valido',
              },
            })}
          />
        </div>
        <div className="mt-2">
          <TextField
            style={inputStyles}
            id="standard-basic"
            label="N. Telefono"
            name="telefono"
            inputRef={register({
              required: {
                value: true,
                message: 'Debe ingresar telefono valido',
              },
            })}
          />
        </div>
        <div className="mt-3">
          <Button type="submit" variant="contained" color="primary" className="btn-block">
            Registrar
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
