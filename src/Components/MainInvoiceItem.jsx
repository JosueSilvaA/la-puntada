import React from 'react';

import { useHistory } from 'react-router-dom';
// import { Card, CardMedia, CardActionArea, Button } from '@material-ui/core';
import { Grid, Button, Icon } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
const MainInvoiceItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem, bgColor, pdLeft } = props;
  const history = useHistory();
  const goTo = () => {
    history.push(route);
  };
  
  return (
    <>
    <Hidden only={['lg', 'xl', 'md']} >
      <Grid item xs={12} style={{ margin:'0px',padding:'0px 5px 0px 5px'}} >
        <div className="d-flex text-center" style={{width:'auto'}} >
          <Button
            variant="outlined"
            className=" mx-auto text-center"
            style={{ margin:'4px',marginRight:'0px',marginLeft:'0px',alignItems: 'center', width: '100%'  ,height: '6rem', borderRadius: '0%', background: bgColor }}
            onClick={goTo}
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
    </Hidden>
    <Hidden only={['xs', 'sm']} >
        <Grid  style={{marginRight:'0px', marginLeft:'0px', padding:'8px'}}>
            <div className="d-flex"  >
            <Button
                variant="outlined"
                className=" mx-auto text-center"
                style={{ width: '100%'  ,height: '12rem', borderRadius: '0%', background: bgColor }}
                onClick={goTo}
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

    </Hidden>

      
    </>
  );
};

export default MainInvoiceItem;
