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
      <Grid item xs={12}  style={{ marginBottom:'3%',padding:'0px'}} >
        <div className="d-flex text-center" style={{width:'auto'}} >
          <Button
            variant="outlined"
            className=" mx-auto text-center"
            style={{ margin:'4px',marginRight:'0px',marginLeft:'0px',alignItems: 'center', width: '100%'  ,height: '6rem', borderRadius: '1px', background: bgColor }}
            onClick={goTo}
          >
            <div className="d-flex col-4 text-center alineacion" style={{paddingLeft:'24px'}}>
              <Icon
                className={iconItem}         
                style={{ alignItems:'center', width: 'auto', fontSize: '35px', color: 'white', paddingLeft: pdLeft }}
              />
              <br/>
            </div>
                <div className="d-flex col-8 alineacion" style={{padding:'0px'}}>
                 <p className="text-center nombre-opcion" style={{color: 'white'}}>{nameItem}</p>
                </div>
            
          </Button>
          
        </div>
        
      </Grid>

      
    </>
  );
};

export default MainInventoryItem;
