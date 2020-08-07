import React from 'react'
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Provider = ({provider}) => {

    console.log('PROVEEDOR ',provider)

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} style={{padding:'10px'}}>
                <Card style={{cursor:"default"}}>
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={provider.nombre}
                    subheader={provider.creado}
                />
                <img
                    src={provider.imgProveedor}
                    title="Paella dish"
                    className = 'imagen-tarjeta'
                    alt={provider.nombre}
                />
                <CardContent>
                    <Typography variant="button" color="textSecondary" component="p" style={{fontWeight:"bold"}}>
                    RTN : {provider.rtn} 
                    <br />
                    Direccion : {provider.direccion} 
                    <br />
                    Telefono : {provider.telefono} 
                    <br />
                    Tipo Producto : { provider.tipoProducto }
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Provider
