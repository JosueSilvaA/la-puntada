import React from 'react';
import {
  Hidden,
  Grid,
  Divider,
  
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import NavBar from '../Components/Navbar';
import Helmet from 'react-helmet';

export default function Bitacora() {

  return (
    <>
    <Helmet bodyAttributes={{ style: 'background-color : #3b6978' }} />
    <NavBar pageName="La Puntada - Bitacora" goBack />
    <Grid
        item
        lg={12}
        md={6}
        sm={6}
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
                  <Typography item xs={12}  sm={12} style={{marginLeft:'5px', fontWeight: 'bold' ,marginRight:'5px'}} component="span" variant="body2" color="textPrimary">
                     Silva
                   </Typography>
                   <Hidden only={['lg', 'md','xl']} >
                    <br></br>
                    </Hidden>         
                  <Typography item xs={12}  sm={12} style={{marginLeft:'5px', marginRight:'5px'}} component="span" variant="body2" color="textPrimary">
                    Fecha: 18/08/2020
                  </Typography>
                  <Hidden only={['lg', 'md','xl']} >
                    <br></br>
                    </Hidden> 
                  <Typography item xs={12}  sm={12} style={{marginLeft:'5px', marginRight:'5px'}} component="span" variant="body2" color="textPrimary">
                    Actividad: Registro Factura
                  </Typography>
          </div> 
            
          </ListItem>
          
          
       
        </List>
       
        
      </Grid>
      
    </>
  );
}
