import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { FormControl, Checkbox, Button, Card, IconButton, InputLabel, OutlinedInput, InputAdornment, CardContent } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Logo from '../logo.svg'
import LoginController from '../Controllers/loginController';

const LoginForm = (props) => {
    const [Data, setData] = useState({ showPass: false, loading: false })

    const inputStyles = {
        width: '100%',
    }

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data, e) => {
        e.preventDefault()
        setData({
            showPass: Data.showPass,
            loading: true
        })
       // props.logApi(data)
       const Login = new LoginController();
       const respuesta = await Login.Autenticar(data.usuario, data.password);
       console.log(respuesta)
    }

    const onClick = () => {
        setData({
            showPass: !Data.showPass,
            loading: Data.loading
        })
    }

    return (
        <React.Fragment>
            <div className="mx-auto col-lg-4 col-sm-8  d-flex justify-content-center">
                <Card className="bg-gray">
                    <div>
                        <img src={Logo} alt=""/>

                    </div>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <TextField
                                style={inputStyles}
                                id="outlined"
                                label="Nombre de usuario"
                                variant="outlined"
                                color="primary"
                                className="mt-3"
                                name="usuario"
                                autoComplete="off"
                                inputRef={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Ingresa nombre de usuario'
                                        }
                                    })
                                }
                            />
                            <span className="text-danger text-small mb-0">
                                {errors?.usuario?.message}
                            </span>
                            <FormControl className="mt-3" variant="outlined" style={inputStyles}>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Contraseña
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={Data.showPass ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end" >
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
                                    inputRef={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingresa tu contraseña'
                                            }
                                        })
                                    }
                                />
                                <span className="text-danger text-small mb-0">
                                    {errors?.password?.message}
                                </span>
                            </FormControl>
                            <div>
                                <Checkbox
                                    /*     checked={checked}
                                        onChange={handleChange} */
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    name="remember"
                                    inputRef={
                                        register
                                    }
                                    
                                />
                                <span
                                 className="text-success" style={{marginLeft:'-10px'}} >
                                    Matener sesión
                                </span>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    className="btn-block mt-3"
                                    disabled={Data.loading ? true : false}>
                                    {Data.loading && <i className="fa fa-refresh fa-spin"></i>}
                                 Login
                            </Button>
                            </div>

                        </form>
`
                        </CardContent>

                </Card>
            </div>

        </React.Fragment>
    )
}

export default LoginForm;