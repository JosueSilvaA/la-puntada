import React, { useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import { Grid , Divider } from '@material-ui/core'
import '../Styles/Catalogue.css'
import CatalogueController from '../Controllers/CatologueController'
import ProductListItem from '../Components/ProductListItem'



const Catalogue = () =>{

    const [ProductList, setProductList] = useState([0])

    const getProductos = async () =>{
        const catalogo = new CatalogueController()
        const products = await catalogo.getAllProducts();

        setProductList(products);
        console.log(products);
    }

    useEffect(() => {
        if(ProductList[0] === 0){
            getProductos()
        }
    })

    return (
        <>
            <Navbar pageName={'Catalogo'} goBack/>

            <Grid container spacing={5} className='mt-3'>
                {ProductList.map(product =>(<ProductListItem key={product.nombre} product={product}/>))}
            </Grid>
        </>
    )
}


export default Catalogue;