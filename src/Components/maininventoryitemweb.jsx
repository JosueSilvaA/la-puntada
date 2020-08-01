import React from 'react';
import { useHistory } from 'react-router-dom';
// import { Card, CardMedia, CardActionArea, Button } from '@material-ui/core';
import { Grid, Button, Icon } from '@material-ui/core';
import '../Styles/Inventario.css'

const MainInventoryItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem, bgColor, pdLeft } = props;
  const history = useHistory();

  const goTo = () => {
    history.push(route);
  };
  return (
    <>
      <Grid item xs={12} >
        <div className="d-flex">
          <Button
            variant="outlined"
            className=" mx-auto text-center boton"
            style={{ background: bgColor,borderRadius:'10px' }}
            onClick={goTo}
          >
            <div className="flex-column" style={{padding:'5px'}}>
            <Icon
              className={iconItem}
              style={{  width: 'auto', fontSize: '46px', color: 'white', paddingLeft: pdLeft }}
            />
            <br/>
            <p className="text-center nombre-opcion" style={{color: 'white'}}>{nameItem}</p>
            </div>
            
          </Button>
          
        </div>
        
      </Grid>

      
    </>
  );
};

export default MainInventoryItem;
