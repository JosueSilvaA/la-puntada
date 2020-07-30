import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import "../Styles/Catalogue.css";
import CatalogueController from "../Controllers/CatologueController";
import ProductListItemSchool from "../Components/ProductListItemSchool";
import ProductListItemTextil from '../Components/ProductListItemTextil'
import ProductListItemVaried from '../Components/ProductListItemVaried';
import SearchProduct from '../Components/SearchProducts'
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Catalogue = () => {
  const [ProductListSchool, setProductListSchool] = useState([0]);
  const [ProductListTextil,setProductListTextil] =  useState([0]);
  const [ProductListVaried, setProductListVaried] = useState([0])
  const [productSelect, setproductSelect] = useState({type:{escolar:false,textil:false,variado:false},product:{}});

  const getProductosSchool = async () => {
    const catalogo = new CatalogueController();
    const productsSchool = await catalogo.getProductsSchool();
    const productsTextil = await catalogo.getProductsTextil();
    const productsVaried = await catalogo.getProductsVaried();
    setProductListSchool(productsSchool);
    setProductListTextil(productsTextil);
    setProductListVaried(productsVaried);
  };

  useEffect(() => {
    if (ProductListSchool[0] === 0  || ProductListTextil[0] === 0) {
      getProductosSchool();
    }
  });

  const selectProduct = (dataProduct) => {
    if(dataProduct.tipoUtil !== undefined){
      setproductSelect(
        {
          type:{
            escolar:true,textil:false,variado:false
          },
          product:dataProduct
        }
      )
    }else if(dataProduct.tipoTextil !== undefined){
      setproductSelect(
        {
          type:{
            escolar:false,textil:true,variado:false
          },
          product:dataProduct
        }
      )
    }else if (dataProduct.tipoVariado !== undefined){
      setproductSelect(
        {
          type:{
            escolar:false,textil:false,variado:true
          },
          product:dataProduct
        }
      )
    }
  };

  return (
    <>
      <Navbar pageName={"La Puntada - Catalogo"} goBack />
      
      <Grid
        container
        spacing={2}
        className = 'contenedor-catalogo'
      > 
        <SearchProduct selectProduct={selectProduct}/>
        {productSelect.type.escolar && (
        <Grid container style={{display:'flex',justifyContent:'center'}}>
          <Grid item xs={12} sm={6} md={6} lg={4} style={{padding:'10px'}}>
            <Card style={{cursor:"default"}}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={productSelect.product.nombre}
                subheader={productSelect.product.creada}
              />
              <img
                src={productSelect.product.imgProducto}
                title="Paella dish"
                className = 'imagen-tarjeta'
                alt={productSelect.product.nombre}
              />
              <CardContent>
                <Typography variant="button" color="textSecondary" component="p" style={{fontWeight:"bold"}}>
                  Descripcion : {productSelect.product.descripcion}
                  <br />
                  Color : {productSelect.product.color}
                  <br />
                  Marca : {productSelect.product.marca}
                  <br />
                  Tipo Producto : {productSelect.product.tipoUtil}
                  <br />
                  Precio : {productSelect.product.precio} lps
                  <br/>
                  Cantidad : {productSelect.product.cantidad}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        )}
        {productSelect.type.textil && (
          <Grid container style={{display:'flex',justifyContent:'center',marginTop:'1%'}}>
            <Grid item  xs={12} sm={6} md={6} lg={4}>
                <Card style={{cursor:"default"}}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                        title={productSelect.product.nombre}
                        subheader={productSelect.product.creada}
                    />
                    <img
                        src={productSelect.product.imgProducto}
                        title="Paella dish"
                        className = 'imagen-tarjeta'
                        alt={productSelect.product.nombre}
                    />
                    <CardContent>
                        <Typography variant="button" color="textSecondary" component="p" style={{fontWeight:"bold"}}>
                            Descripcion : {productSelect.product.descripcion}
                            <br/>
                            Color : {productSelect.product.color}
                            <br/>
                            Precio : {productSelect.product.precio} lps
                            <br/>
                            Tipo producto : {productSelect.product.tipoTextil}
                            <br/>
                            Cantidad : {productSelect.product.cantidad}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
          </Grid>
        )}
        {productSelect.type.variado && (
          <Grid container style={{display:'flex',justifyContent:'center',marginTop:'1%'}}>
            <Grid item  xs={12} sm={6} md={6} lg={4}>
                <Card style={{cursor:"default"}}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                        title={productSelect.product.nombre}
                        subheader={productSelect.product.creada}
                    />
                    <img
                        src={productSelect.product.imgProducto}
                        title="Paella dish"
                        className = 'imagen-tarjeta'
                        alt={productSelect.product.nombre}
                    />
                    <CardContent>
                        <Typography variant="button" color="textSecondary" component="p" style={{fontWeight:"bold"}}>
                            Descripcion : {productSelect.product.descripcion}
                            <br/>
                            Precio : {productSelect.product.precio} lps
                            <br/>
                            Tipo producto : {productSelect.product.tipoTextil}
                            <br/>
                            Cantidad : {productSelect.product.cantidad}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
          </Grid>
        )}
        <Grid className="mt-2 contenedor-titulo">
          <h5 className="titulo-categoria">Productos Escolares</h5>
          <hr />
        </Grid>

        {ProductListSchool.map(productSchool => (
          <ProductListItemSchool  key={productSchool._id} product={productSchool} />
        ))}

        <Grid className="mt-2 contenedor-titulo">
        <h5 className="titulo-categoria">Productos Textiles</h5>
        <hr />
        </Grid>
        
        {ProductListTextil.map(productTextil =>(
          <ProductListItemTextil key = {productTextil._id} product ={productTextil}/>
        ))}

        <Grid className="mt-2 contenedor-titulo">
          <h5 className="titulo-categoria">Productos Variados</h5>
          <hr />
        </Grid>
        
        {ProductListVaried.map(productVaried =>(
          <ProductListItemVaried key = {productVaried._id} product = {productVaried}/>
        ))}
      </Grid>
    </>
  );
};

export default Catalogue;