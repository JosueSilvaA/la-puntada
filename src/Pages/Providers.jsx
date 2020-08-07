import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import NavBar from '../Components/Navbar';
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "../Styles/Providers.css";
import ProvidersController from '../Controllers/ProvidersController'
import Provider from '../Components/Provider'

const Providers = () => {

    const [providers, setProviders] = useState([0])

    const getProviders = async () =>{
        const servicesProvider = new ProvidersController();
        const dataProviders = await servicesProvider.getProviders();
        setProviders(dataProviders.items)
    }

    useEffect(() => {
        if (providers[0] === 0  || providers[0] === 0) {
            getProviders();
          }
      });

    return (
        <>
            <Helmet bodyAttributes={{ style: 'background-color : #3b6978' }} />
            <NavBar pageName="La Puntada-Proveedores" goBack />
            <Grid
                container
                spacing={2}
                className = ' mt-1'
                style={{display:'flex',justifyContent:'center',padding:'2%'}}
            > 
                {providers.map(pro =>(
                    <Provider key ={pro._id} provider ={pro}/>
                ))}
            </Grid>
        </>
    )
}

export default Providers
