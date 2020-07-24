import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Grid } from '@material-ui/core';
import "../Styles/Catalogue.css";
import CatalogueController from "../Controllers/CatologueController";
import ProductListItemSchool from "../Components/ProductListItemSchool";
import ProductListItemTextil from '../Components/ProductListItemTextil'

const Catalogue = () => {
  const [ProductListSchool, setProductListSchool] = useState([0]);
  const [ProductListTextil,setProductListTextil] =  useState([0]);

  const getProductosSchool = async () => {
    const catalogo = new CatalogueController();
    const productsSchool = await catalogo.getProductsSchool();
    const productsTextil = await catalogo.getProductsTextil();
    setProductListSchool(productsSchool);
    setProductListTextil(productsTextil);
  };

  useEffect(() => {
    if (ProductListSchool[0] === 0  || ProductListTextil[0] === 0) {
      getProductosSchool();
    }
  });

  return (
    <>
      <Navbar pageName={"Catalogo"} goBack />
      
      <Grid
        container
        spacing={2}
        className = 'contenedor-catalogo'
      > 
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

      </Grid>
    </>
  );
};

export default Catalogue;
