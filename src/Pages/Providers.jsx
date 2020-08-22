import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Grid, Fab, Backdrop, Fade, Modal, Button, Tooltip, Icon, CircularProgress } from '@material-ui/core';
import NavBar from '../Components/Navbar';
import '../Styles/Providers.css';
import ProvidersController from '../Controllers/ProvidersController';
import Provider from '../Components/Provider';
import NewProvider from '../Components/NewProvider';

const Providers = () => {
  const [providers, setProviders] = useState({ load: false, data: [0] });
  const [Open, setOpen] = useState(false);

  const getProviders = async () => {
    const servicesProvider = new ProvidersController();
    const dataProviders = await servicesProvider.getProviders();
    setProviders({ load: true, data: dataProviders.items });
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (providers.data[0] === 0 || providers.data[0] === 0) {
      getProviders();
    }
  });

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #3b6978' }} />
      <NavBar pageName="La Puntada-Proveedores" goBack />
      <Tooltip title="Add" aria-label="add">
        <Fab
          style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            marginRight: '0.4rem',
            marginBottom: '0.7rem',
            zIndex: '1',
          }}
          variant="round"
          color="default"
          aria-label="add"
          onClick={handleOpen}
        >
          <Icon className="fas fa-user-plus" style={{ width: '2rem' }} />
        </Fab>
      </Tooltip>
      <Grid
        container
        className=" mt-1"
        style={{ display: 'flex', justifyContent: 'center', padding: '2%' }}
      >
        {providers.load ? (
          providers.data.map((pro) => <Provider key={pro._id} provider={pro} />)
        ) : (
          <div className="mx-auto">
            <div className="d-flex mt-5">
              <CircularProgress className="mx-auto" size={60} color="secondary" />
            </div>
            <div className="d-flex">
              <p className="mx-auto text-white">Obteniendo datos...</p>
            </div>
          </div>
        )}
        <Modal
          style={{ position: 'absolute', marginTop: '2.5%' }}
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
                  <NewProvider providers={getProviders} />
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
  );
};

export default Providers;
