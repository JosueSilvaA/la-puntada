/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  Avatar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
  Radio,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import RolCtrl from '../Controllers/RoleController';
import UserCtrl from '../Controllers/UsersController';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSuccess: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  buttonProgress: {
    color: 'green',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

// eslint-disable-next-line react/prop-types
const Tests = ({ infoUser }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const imageUploader = React.useRef(null);
  // eslint-disable-next-line react/prop-types
  const [ImageUser, setImageUser] = useState({ value: false, img: infoUser.imgUsuario });
  const [RolList, setRolList] = useState({
    load: false,
    value: [{ _id: 1, nombre: 'Esperando conexión.' }],
  });
  // eslint-disable-next-line react/prop-types
  const [Role, setRole] = React.useState({ selected: false, rol: infoUser.rol });
  const [Loading, setLoading] = useState(false);

  const handleChangeRatio = (event) => {
    setRole({ selected: true, rol: event.target.value });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fileSelectedHandler = (event) => {
    setImageUser({
      value: true,
      file: event.target.files[0],
      img: URL.createObjectURL(event.target.files[0]),
    });
  };

  const getRoles = async () => {
    const Rol = new RolCtrl();
    const result = await Rol.getRoles();
    if (!result.Error) {
      setRolList({
        load: true,
        value: result.Items,
      });
    }
  };

  const changeUserImage = async () => {
    setLoading(true);
    const user = new UserCtrl();
    const result = await user.changeUserImage(infoUser._id, ImageUser.file);
    if (!result.err) {
      setLoading(false);
      swal('Éxito', result.message, 'success', { timer: 2000 }).then(() => {
        window.location.reload();
      });
    } else {
      swal('Error', result.message, 'warning', { timer: 2000 });
    }
  };

  const changeRole = async () => {
    setLoading(true);
    const User = new UserCtrl();
    // eslint-disable-next-line react/prop-types
    const result = await User.changeRolUser(infoUser._id, Role.rol);
    if (!result.err) {
      swal('Éxito', result.message, 'success');
      setLoading(false);
      window.location.reload();
    } else {
      swal('Error', result.message, 'error');
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Ajustes de usuario</Typography>
          <Typography className={classes.secondaryHeading}>Editar imagen de usuario</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xm={12} className="bg-white mx-auto mb-3">
              <Avatar
                // eslint-disable-next-line react/prop-types
                alt={infoUser.nombre}
                src={ImageUser.img}
                className="mx-auto border border-danger mt-2"
                style={{ width: '10rem', height: '10rem', fontSize: '7rem' }}
              />
              <input
                type="file"
                onChange={fileSelectedHandler}
                style={{ display: 'none' }}
                ref={imageUploader}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} className="mx-auto my-auto d-flex">
              {!ImageUser.value && (
                <Button
                  onClick={() => imageUploader.current.click()}
                  className="mx-auto"
                  variant="contained"
                  color="primary"
                >
                  Elegir imagen
                </Button>
              )}
              {ImageUser.value && (
                <div className={classes.wrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonClassname}
                    disabled={Loading}
                    onClick={changeUserImage}
                  >
                    Guardar
                  </Button>
                  {Loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
              )}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Ajustes de usuario</Typography>
          <Typography className={classes.secondaryHeading}>Cambiar rol del usuario</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item lg={4} md={4} sm={5} xs={10} className="mx-auto">
              <FormControl component="fieldset">
                <FormLabel component="legend">Rol de usuario</FormLabel>
                <RadioGroup
                  aria-label="Rol"
                  name="rol"
                  value={Role.rol}
                  onChange={handleChangeRatio}
                >
                  {RolList.value.map((element) => (
                    <FormControlLabel
                      // eslint-disable-next-line no-underscore-dangle
                      value={element._id}
                      key={element.nombre}
                      control={<Radio />}
                      label={element.nombre}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Grid item lg={8} md={12} sm={12} xs={11} className="mx-auto d-flex">
                <div className={classes.wrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonClassname}
                    disabled={Loading}
                    onClick={changeRole}
                  >
                    Cambiar Rol
                  </Button>
                  {Loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Ajustes de usuario</Typography>
          <Typography className={classes.secondaryHeading}>Editar información</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1>horo</h1>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Tests;
