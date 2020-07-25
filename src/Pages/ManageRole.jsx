import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
import RoleController from '../Controllers/RoleController';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

class ManageRole extends React.Component {
  isAlreadyMounted = false;

  constructor() {
    super();
    this.state = {
      privilegios: '',
      loaded: false,
      selected: '',
      open: '',
      privSelected: '',
    };
    this.agregarPrivilegio = this.agregarPrivilegio.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // const { text, title, agree, disagree } = props;

  async componentDidMount() {
    this.isAlreadyMounted = true;
    if (this.isAlreadyMounted) {
      const { location } = this.props;
      const Roles = new RoleController();
      const respuesta = await Roles.getPrivilegiosPorRol(location.state.idRole);
      this.setState({
        privilegios: respuesta.Items.privilegios,
        loaded: true,
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

  updateSelected(selectedIndex, privSelected) {
    this.setState({
      selected: selectedIndex,
      privSelected,
    });
  }

  agregarPrivilegio() {
    const { history } = this.props;
    history.push('/add-priv-to-role');
  }

  render() {
    const { loaded, privilegios, selected, open, privSelected } = this.state;
    const { location } = this.props;
    return (
      <div>
        <AppBar titulo="Privilegios" />
        <List>
          {loaded
            ? privilegios.map((e, i) => (
                <ListItem
                  button
                  onClick={() => this.updateSelected(i, e.nombre)}
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
            : ''}
          <Divider variant="inset" component="li" />
        </List>
        <BottomNav
          firstIcon={AddIcon}
          firstIconRoute="/login"
          secondIcon={ClearIcon}
          secondIconOnClick={this.handleClickOpen}
        />
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remover Privilegio</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ¿Está seguro que desea remover el privilegio <b>{privSelected}</b> del rol  {' '}
              <b>{location.state.roleName}</b>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
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
