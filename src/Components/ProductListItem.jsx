import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

const ProductListItem = ({product}) =>{
    return(
        <>
            <Grid item xs={12} md ={6}>
                <h1>{product.nombre}</h1>
            </Grid>
        </>
    )
}

export default ProductListItem
