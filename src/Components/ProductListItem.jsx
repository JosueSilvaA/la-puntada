import React, { Component } from 'react'
import { 
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography
    } 
from '@material-ui/core'


const ProductListItem = ({product}) =>{
    return(
        <>
            <Grid item  xs={12} md ={4} style={{padding:'2%'}}>
                <Card>
                    <CardHeader
                        title={product.nombre}
                        subheader={product.creada}
                    />
                    <img
                        src={product.imgProducto}
                        title="Paella dish"
                        style={{backgroundPosition:'center center',backgroundSize:'cover',width:'100%'}}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Descripcion : {product.descripcion}
                            <br/>
                            Color : {product.color}
                            <br/>
                            Marca : {product.marca}
                            <br/>
                            Tipo Producto : {product.tipoUtil}
                            <br/>
                            Precio : {product.precio}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    
        </>
    )
}

export default ProductListItem
