import React from 'react';
// import { Card, CardMedia, CardActionArea, Button } from '@material-ui/core';
import { Grid, Button, Icon } from '@material-ui/core';

const MainInventoryItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem, bgColor, pdLeft } = props;
  return (
    <>
      <Grid item xs={12} style={{ margin:'0px',"padding":'0px'}} >
        <div className="d-flex mx-auto text-center" style={{width:'auto'}} >
          <Button
            variant="outlined"
            className=" mx-auto text-center"
            style={{ margin:'4px',marginRight:'0px',marginLeft:'0px',alignItems: 'center', width: '22rem'  ,height: 'auto', borderRadius: '0%', background: bgColor }}
            href={route}
          >
            <div className="d-flex col-4 text-center" style={{paddingLeft:'24px', alignItems:'center'}}>
              <Icon
                className={iconItem}         
                style={{ alignItems:'center', width: 'auto', fontSize: '46px', color: 'white', paddingLeft: pdLeft }}
              />
              <br/>
            </div>
                <div className="d-flex col-8">
                 <p className="text-center" style={{color: 'white'}}>{nameItem}</p>
                </div>
            
          </Button>
          
        </div>
        
      </Grid>

      
    </>
  );
};

export default MainInventoryItem;
