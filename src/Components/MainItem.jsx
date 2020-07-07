import React from 'react';
import { Card, CardMedia, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, iconItem, nameItem } = props;
  const imgStyles = {
    width: '70px',
    height: '80px',
  };

  return (
    <>
      <div className="col-sm-6 col-6 mt-2">
        <Card>
          <CardActionArea>
            <Link to={route}>
              <CardMedia className="mx-auto" style={imgStyles} image={iconItem} />

              <p className="text-center mb-0 h5">{nameItem}</p>
            </Link>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default MainItem;
