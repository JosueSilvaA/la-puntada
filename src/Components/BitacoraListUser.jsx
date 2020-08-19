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

// eslint-disable-next-line react/prop-types
const BitacoraListUser = ({nombre}) => {

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
                  <Typography item xs={12}  sm={12} style={{marginLeft:'5px', fontWeight: 'bold' ,marginRight:'5px'}} component="span" variant="body2" color="textPrimary">
                     {nombre}
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
};
export default BitacoraListUser;
