import React from 'react';
import { Card, CardMedia, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainItem = (props) => {
    const imgStyles = {
        width: '70px',
        height: '80px'
    }

    return (
        <React.Fragment>
            <div className="col-sm-6 col-6 mt-2">
                <Card className="border border-danger" >
                    <CardActionArea>
                        <Link to={props.route}>

                            <CardMedia
                                className="mx-auto"
                                style={imgStyles}
                                image={props.iconItem}
                            />
                            <div>
                                <p className="text-center mb-0 h3">{props.nameItem}</p>
                            </div>
                        </Link>
                    </CardActionArea>

                </Card>

            </div>

        </React.Fragment>
    )
}

export default MainItem;