import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Grid, Divider } from "@material-ui/core";
import "../Styles/Catalogue.css";
import CatalogueController from "../Controllers/CatologueController";
import ProductListItem from "../Components/ProductListItem";

const Catalogue = () => {
  const [ProductList, setProductList] = useState([0]);

  const getProductos = async () => {
    const catalogo = new CatalogueController();
    const products = await catalogo.getAllProducts();

    setProductList(products);
  };

  useEffect(() => {
    if (ProductList[0] === 0) {
      getProductos();
    }
  });

  return (
    <>
      <Navbar pageName={"Catalogo"} goBack />
      <Grid className='mt-2' style={{width:'100%',margin:'0px',padding:'2%'}}>
        <h5 style={{textAlign:'center'}}>Productos Escolares</h5> 
        <hr/> 
      </Grid>
      <Grid container spacing={2} className=" contenedor-catalogo" style={{width:'100%',margin:'0px',padding:'2%'}}>
        {ProductList.map(product => (
          <ProductListItem key={product._id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default Catalogue;
