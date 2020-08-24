/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import React from 'react';
import List from '@material-ui/core/List';
// import InputLabel from '@material-ui/core/InputLabel';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import BuildIcon from '@material-ui/icons/Build';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { useHistory } from 'react-router';
import { CircularProgress } from '@material-ui/core';
import RoleController from '../Controllers/RoleController';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';
import NavBar from '../Components/Navbar';

class ManageRole extends React.Component {
  isAlreadyMounted = false;

  constructor() {
    super();
    this.state = {
      privilegios: '',
      privilegiosFaltantes: '',
      loaded: false,
      loadedFaltantes: false,
      selected: '',
      open: '',
      privSelected: '',
      openAdd: '',
      idPrivilegio: '',
      descripcionPrivilegio: '',
      idPriv: '',
      reload: true,
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.addPriv = this.addPriv.bind(this);
    this.removePriv = this.removePriv.bind(this);
  }

  // const { text, title, agree, disagree } = props;

  async componentDidMount() {
    this.isAlreadyMounted = true;
    if (this.isAlreadyMounted) {
      const { location } = this.props;
      const Roles = new RoleController();
      //  const respuesta = await Roles.getPrivilegiosNotInRol(location.state.roleName);
      const respuesta = await Roles.getPrivilegiosPorRol(location.state.idRole);
      const privilegios = await Roles.getPrivilegiosNotInRol(location.state.roleName);
      this.setState({
        privilegios: respuesta.Items,
        privilegiosFaltantes: privilegios.Items,
        loaded: true,
        loadedFaltantes: true,
      });
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleCloseAdd = () => {
    this.setState({
      openAdd: false,
    });
  };

  handleClickAdd = () => {
    this.setState({
      openAdd: true,
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      idPrivilegio: e.target.value,
    });
    this.obtenerInfoPrivilegio(e.target.value);
  };

  updateSelected(selectedIndex, privSelected, idPriv) {
    this.setState({
      selected: selectedIndex,
      privSelected,
      idPriv,
    });
  }

  obtenerInfoPrivilegio(idPrivilegio) {
    const { privilegiosFaltantes } = this.state;
    // eslint-disable-next-line consistent-return
    const privilegio = privilegiosFaltantes.find(function (privilegio, index) {
      if (privilegio._id === idPrivilegio) {
        return privilegio.descripcion;
      }
    });
    this.setState({
      descripcionPrivilegio: privilegio.descripcion,
    });
  }

  async addPriv() {
    // eslint-disable-next-line react/prop-types
    const { location } = this.props;
    const { idPrivilegio } = this.state;
    const Roles = new RoleController();
    // eslint-disable-next-line no-unused-vars
    const respuesta = await Roles.addPrivToRole(location.state.idRole, idPrivilegio);
    this.handleCloseAdd();
    const privilegios = await Roles.getPrivilegiosNotInRol(location.state.roleName);
    this.setState({
      privilegiosFaltantes: privilegios.Items,
    });
    window.location.reload(false)
  }

  async removePriv() {
    const { location } = this.props;
    const { idPriv, reload } = this.state;
    const Roles = new RoleController();
    // eslint-disable-next-line no-unused-vars
    const respuesta = await Roles.removePrivFromRole(location.state.idRole, idPriv);
    this.handleClose();
    const privilegios = await Roles.getPrivilegiosNotInRol(location.state.roleName);
    this.setState({
      privilegiosFaltantes: privilegios.Items,
      reload: !reload,
    });
    window.location.reload(false)
  }

  render() {
    const {
      loaded,
      privilegios,
      selected,
      open,
      privSelected,
      openAdd,
      privilegiosFaltantes,
      loadedFaltantes,
      nombrePrivilegio,
      descripcionPrivilegio,
    } = this.state;
    const { location } = this.props;
    return (
      <div>
        {/* <AppBar titulo="Privilegios" /> */}
        <NavBar goBack pageName="Privilegios" />
        <List>
          {loaded ? (
            privilegios.map((e, i) => (
              <ListItem
                button
                onClick={() => this.updateSelected(i, e.nombre, e._id)}
                selected={selected === i}
              >
                <ListItemAvatar>
                  <Avatar>
                    <BuildIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={e.nombre} secondary={e.descripcion} />
              </ListItem>
            ))
          ) : (
            <div className="mx-auto">
              <div className="d-flex mt-5">
                <CircularProgress className="mx-auto" size={60} color="secondary" />
              </div>
              <div className="d-flex">
                <p className="mx-auto text-danger">Obteniendo datos...</p>
              </div>
            </div>
          )}
          <Divider variant="inset" component="li" />
        </List>
        <BottomNav
          firstIcon={AddIcon}
          firstIconOnClick={this.handleClickAdd}
          secondIcon={ClearIcon}
          secondIconOnClick={this.handleClickOpen}
        />
        <Dialog
          open={openAdd}
          onClose={this.handleCloseAdd}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Agregar Privilegio</DialogTitle>
          <DialogContent>
            <DialogContentText>Seleccione un privilegio para agregarlo al rol.</DialogContentText>
            <FormControl variant="outlined" style={{ minWidth: '100%' }}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={nombrePrivilegio}
                onChange={this.handleChangeSelect}
                displayEmpty
                autoWidth
              >
                {loadedFaltantes
                  ? privilegiosFaltantes.map((e, i) => (
                      <MenuItem value={e._id}>{e.nombre}</MenuItem>
                    ))
                  : ''}
              </Select>
            </FormControl>
            {descripcionPrivilegio ? (
              <DialogContentText>
                {' '}
                <br />
                {descripcionPrivilegio}{' '}
              </DialogContentText>
            ) : (
              ''
            )}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.addPriv} color="primary">
              Aceptar
            </Button>
            <Button onClick={this.handleCloseAdd} color="primary" autoFocus>
              Rechazar
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remover Privilegio</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ¿Está seguro que desea remover el privilegio <b>{privSelected}</b> del rol
              <b>{location.state.roleName}</b>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.removePriv} color="primary">
              Aceptar
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Rechazar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ManageRole;
