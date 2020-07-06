import React from 'react';
import { Card, CardMedia, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainItem = (props) => {
    const imgStyles = {
        width: '70px',
        height: '80px'
    }
    const cardStyles = {
        boxShadow: 'none'
    }

    return (
        <React.Fragment>
            <div className="col-sm-6 col-6 mt-2">
                <Card >
                    <CardActionArea>
                        <Link to={props.route}>

                            <CardMedia
                                className="mx-auto"
                                style={imgStyles}
                                image={props.iconItem}
                            />
                            
                            <p className="text-center mb-0 h5">{props.nameItem}</p>
                            
                        </Link>
                    </CardActionArea>

                </Card>

            </div>

        </React.Fragment>
    )
}

export default MainItem;