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
import "moment/locale/es";

const Provider = ({ provider }) => {
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

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ padding: "10px" }}>
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
            title={provider.nombre}
            subheader={dateFormat(provider.creado)}
          />
          <img
            loading="lazy"
            src={provider.imgProveedor}
            title="Paella dish"
            className="imagen-tarjeta"
            alt={provider.nombre}
          />
          <CardContent>
            <Typography
              variant="button"
              color="textSecondary"
              component="p"
              style={{ fontWeight: "bold" }}
            >
              RTN : {provider.rtn}
              <br />
              Direccion : {provider.direccion}
              <br />
              Telefono : {provider.telefono}
              <br />
              Tipo Producto : {provider.tipoProducto}
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
        <MenuItem>
          <Typography variant="inherit" className="ml-0">
            Editar
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="inherit" className="ml-0">
            Eliminar
          </Typography>
        </MenuItem>
      </MenuUser>
    </>
  );
};

export default Provider;
