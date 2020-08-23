import React, { useEffect,useState } from 'react';
import {
  Hidden,
  Grid,
  Divider,
  
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import UserController from '../Controllers/UsersController'
import ProductController from '../Controllers/ProductsController'
import InvoiceController from '../Controllers/InvoiceCotroller'
import ProvidersController from '../Controllers/ProvidersController'
// eslint-disable-next-line react/prop-types
const BitacoraListUser = ({fecha, categoria, actividad, entidad, finalidad}) => {
  const fechaCreada= moment(fecha).format('DD-MM-YYYY HH:mm');
  

  const [nombreEntidad, setNombreEntidad] = useState('')

  
  const obtenerEntidad = async() =>{
    const usuarioController =  new UserController();
    const productoController =  new ProductController();
    const facturaController = new InvoiceController();
    const proveedorController = new ProvidersController();

    const usuario = await usuarioController.GetInfoUser(entidad);
    const producto = await productoController.GetProductById(entidad);
    const facturaCli = await facturaController.getInvoiceCli(entidad);
    const facturaPro = await facturaController.getInvoiceProv(entidad);
    const provider = await proveedorController.getProvider(entidad);
 
    if(usuario.item !== null){
      setNombreEntidad(usuario.item.nombres)
    }else if (producto.items.length !== 0){
      setNombreEntidad(producto.items.nombre)
    }else if(facturaCli.item !== undefined){
      setNombreEntidad(`Factura del Cliente - ${facturaCli.item.nombreCliente}`)
    }else if(facturaPro.item !== undefined){
      setNombreEntidad(`Factura del Proveedor - ${facturaPro.item.proveedor.nombre}`)
    }else if(provider.item.length !== 0){
      setNombreEntidad(`Proveedor alterado - ${provider.item.nombre}`)
    }else{
      setNombreEntidad(`REPORTE`)
    }
  }

  useEffect(() => {
    obtenerEntidad();
  }, [])

  return (
    <>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="mx-auto"
        style={{ paddingLeft: '20px', paddingRight: '20px', margin: '0px' }}
      >
        <List>
          <ListItem
            alignItems="center"
            className="bg-white"
            button
            style={{
              paddingBottom: '0px',
            }}
          >   
          <div style={{margin:'10px', width:'100%'}}>  
            <ListItemText style={{marginLeft:'5px', fontWeight: 'bold' ,marginRight:'5px'}}>
                           
                  <Typography item xs={12}  sm={12} style={{marginLeft:'10px', marginRight:'5px'}} component="span" variant="body2" color="textPrimary">
                    Fecha: {fechaCreada}
                  </Typography>
              </ListItemText>      
                  <Hidden only={['lg', 'md','xl']} >
                    <hr></hr>
                    </Hidden> 
                  <Typography item xs={12}  sm={12} style={{marginLeft:'10px', marginRight:'10px'}} component="span" variant="body2" color="textPrimary">
                    Categoria: {categoria}
                  </Typography>
                  <Hidden only={['lg', 'md','xl']} >
                    <br></br>
                    </Hidden> 
                  <Typography item xs={12}  sm={12} style={{marginLeft:'10px', marginRight:'10px'}} component="span" variant="body2" color="textPrimary">
                    Actividad: {actividad}
                  </Typography>
                  <Hidden only={['lg', 'md','xl']} >
                    <br></br>
                    </Hidden> 
                  <Typography item xs={12}  sm={12} style={{marginLeft:'10px', marginRight:'10px'}} component="span" variant="body2" color="textPrimary">
                    Entidad Alterada: {nombreEntidad}
                  </Typography>
                  <Hidden only={['lg', 'md','xl']} >
                    <br></br>
                    </Hidden> 
                  <Typography item xs={12}  sm={12} style={{marginLeft:'10px', marginRight:'10x'}} component="span" variant="body2" color="textPrimary">
                    Finalidad: {finalidad}
                  </Typography>
          </div> 
          </ListItem>
        </List>
      </Grid>
    </>
  );
};
export default BitacoraListUser;
