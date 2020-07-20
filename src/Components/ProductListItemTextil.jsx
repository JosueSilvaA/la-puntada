import React from 'react'
import { 
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography
    } 
from '@material-ui/core'


const ProductListItemTextil = ({product}) =>{
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
                        alt={product.nombre}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Descripcion : {product.descripcion}
                            <br/>
                            Color : {product.color}
                            <br/>
                            Precio : {product.precio} lps
                            <br/>
                            Tipo Producto : {product.tipoTextil}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    
        </>
    )
}

export default ProductListItemTextil;
