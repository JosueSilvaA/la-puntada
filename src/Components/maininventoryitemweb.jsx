import React from 'react';
// import { Card, CardMedia, CardActionArea, Button } from '@material-ui/core';
import { Grid, Button, Icon } from '@material-ui/core';

const MainInventoryItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem, bgColor, pdLeft } = props;
  return (
    <>
      <Grid item xs={12}  style={{marginRight:'0px', marginLeft:'0px'}}>
        <div className="d-flex"  >
          <Button
            variant="outlined"
            className=" mx-auto text-center"
            style={{ width: '100%'  ,height: '12rem', borderRadius: '0%', background: bgColor }}
            href={route}
          >
            <div className="flex-column" style={{padding:'5px'}}>
            <Icon
              className={iconItem}
              style={{  width: 'auto', fontSize: '46px', color: 'white', paddingLeft: pdLeft }}
            />
            <br/>
            <p className="text-center" style={{color: 'white'}}>{nameItem}</p>
            </div>
            
          </Button>
          
        </div>
        
      </Grid>

      
    </>
  );
};

export default MainInventoryItem;
