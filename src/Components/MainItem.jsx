import React from 'react';
// import { Card, CardMedia, CardActionArea, Button } from '@material-ui/core';
import { Grid, Button, Icon } from '@material-ui/core';

const MainItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem, bgColor } = props;
  return (
    <>
      <Grid item xs={6}>
        <div className="d-flex">
          <Button
            variant="outlined"
            className="mx-auto"
            style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: bgColor }}
            href={route}
          >
            <Icon
              className={iconItem}
              style={{ width: '2.9rem', fontSize: '28px', color: 'white', paddingLeft: '5px' }}
            />
          </Button>
        </div>
        <p className="text-center">{nameItem}</p>
      </Grid>

      {/* <div className="col-sm-6 col-6 mt-2 d-flex"> */}
      {/* <Button className="mx-auto mb-4" href={route} variant="contained" style={btnStyles} >
          <img src={iconItem} style={imgStyles} alt="" />
        </Button> */}
      {/* <p className="text-center mb-0 h5">{nameItem}</p> */}

      {/* <Card className="bg-secondary">
          <CardActionArea style={{borderRadius: '30%', background: 'blue'}}>
            <Link to={route}>
              <CardMedia className="mx-auto bg-dark" style={imgStyles} image={iconItem} />

              <p className="text-center mb-0 h5">{nameItem}</p>
            </Link>
          </CardActionArea>
        </Card> */}
      {/* </div> */}
    </>
  );
};

export default MainItem;
