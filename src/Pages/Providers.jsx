import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import NavBar from '../Components/Navbar';
import { 
    Grid, 
    Card, 
    CardHeader, 
    CardContent, 
    Typography,
    Fab,
    Backdrop,
    Fade,
    Modal,
    Button,
    CircularProgress,
    Divider,
    Tooltip,
    Icon, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "../Styles/Providers.css";
import ProvidersController from '../Controllers/ProvidersController'
import Provider from '../Components/Provider'

const Providers = () => {

    const [providers, setProviders] = useState([0])
    const [Open, setOpen] = useState(false);

    const getProviders = async () =>{
        const servicesProvider = new ProvidersController();
        const dataProviders = await servicesProvider.getProviders();
        setProviders(dataProviders.items)
    }

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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
                <Tooltip title="Add" aria-label="add">
                    <Fab
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        marginRight: '0.4rem',
                        marginBottom: '0.7rem',
                        zIndex:'1'
                    }}
                    variant="round"
                    color="default"
                    aria-label="add"
                    onClick={handleOpen}
                    >
                    <Icon className="fas fa-user-plus" style={{ width: '2rem' }} />
                    </Fab>
                </Tooltip>
                <Modal
                    style={{ position: 'absolute',marginTop:'2%'}}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={Open}
                    onClose={handleClose}
                    closeAfterTransition
                    disableScrollLock="false"
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={Open}>
                    <div className="border border-dark" id="transition-modal-title">
                        <div className="container">
                        <div className="">
                            
                        </div>
                        <div className="bg-white pb-3 d-flex content-align-center">
                            <Button
                            className="mx-4 btn-block"
                            variant="contained"
                            color="secondary"
                            onClick={handleClose}
                            >
                            Cancelar
                            </Button>
                        </div>
                        </div>
                    </div>
                    </Fade>
                </Modal>
            </Grid>
        </>
    )
}

export default Providers
