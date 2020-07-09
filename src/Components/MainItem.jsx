import React from 'react';
import { Card, CardMedia, CardActionArea, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem, bgColor } = props;
  const imgStyles = {
    width: '70px',
    height: '80px',
  };

  const btnStyles = {
    background: bgColor,
    borderRadius: '49%',
  }
  return (
    <>
      <div className="col-sm-6 col-6 mt-2 d-flex">
        <Button className="mx-auto mb-4" href={route} variant="contained" style={btnStyles} >
          <img src={iconItem} style={imgStyles} alt=""/>
        </Button>
        {/* <p className="text-center mb-0 h5">{nameItem}</p> */}

        {/* <Card className="bg-secondary">
          <CardActionArea style={{borderRadius: '30%', background: 'blue'}}>
            <Link to={route}>
              <CardMedia className="mx-auto bg-dark" style={imgStyles} image={iconItem} />

              <p className="text-center mb-0 h5">{nameItem}</p>
            </Link>
          </CardActionArea>
        </Card> */}
      </div>
    </>
  );
};

export default MainItem;
