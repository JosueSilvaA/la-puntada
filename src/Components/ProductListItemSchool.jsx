import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  MenuItem,
  Menu as MenuUser,
  Fade,
} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import "../Styles/Catalogue.css";

const ProductListItemSchool = ({ product }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dateFormat = (data) => {
    let date = data;
    moment.locale("es");
    date = moment().format("LL");
    return date;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickDelete = () => {
    // eslint-disable-next-line no-underscore-dangle
    history.push(`/inventory/deleteProduct/${product._id}`);
  };

  const handleClickEdit = () => {
    // eslint-disable-next-line no-underscore-dangle
    history.push(`/inventory/editProduct/${product._id}`);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        style={{ padding: "10px", margin: "5px" }}
      >
        <Card style={{ cursor: "default" }}>
          <CardHeader
            action={
              <IconButton
                aria-label="settings"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={product.nombre}
            subheader={dateFormat(product.creada)}
          />
          <img
            src={product.imgProducto}
            title="Paella dish"
            className="imagen-tarjeta"
            alt={product.nombre}
          />
          <CardContent>
            <Typography
              variant="button"
              color="textSecondary"
              component="p"
              style={{ fontWeight: "bold" }}
            >
              Descripcion : {product.descripcion}
              <br />
              Color : {product.color}
              <br />
              Marca : {product.marca}
              <br />
              Tipo Producto : {product.tipoUtil}
              <br />
              Precio : {product.precio} lps
              <br />
              Cantidad : {product.cantidad}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <MenuUser
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClickEdit}>
          <Typography variant="inherit" className="ml-0">
            Editar
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClickDelete}>
          <Typography variant="inherit" className="ml-0">
            Eliminar
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="inherit" className="ml-0">
            Imagen
          </Typography>
        </MenuItem>
      </MenuUser>
    </>
  );
};

export default ProductListItemSchool;
