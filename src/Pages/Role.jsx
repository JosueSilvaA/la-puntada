/* eslint-disable class-methods-use-this */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SecurityIcon from '@material-ui/icons/Security';
import Divider from '@material-ui/core/Divider';
import { CircularProgress } from '@material-ui/core';
import RoleController from '../Controllers/RoleController';
import AppBar from '../Components/AppBar';
import NavBar from '../Components/Navbar';

class Role extends React.Component {
  isAlreadyMounted = false;

  constructor() {
    super();
    this.state = {
      roles: '',
      loaded: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.isAlreadyMounted = true;
    if (this.isAlreadyMounted) {
      const Roles = new RoleController();
      const respuesta = await Roles.getRoles();
      this.setState({
        roles: respuesta.Items,
        loaded: true,
      });
    }
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  handleClick(idRole, roleName) {
    const { history } = this.props;
    history.push('/manage-role', { idRole, roleName });
  }

  render() {
    const { loaded, roles } = this.state;
    return (
      <div>
        {/* <AppBar titulo="Roles" /> */}
        <NavBar goBack pageName="Roles" />
        <List>
          {loaded ? (
            roles.map((e, i) => (
              <ListItem button onClick={() => this.handleClick(e._id, e.nombre)}>
                <ListItemAvatar>
                  <Avatar>
                    <SecurityIcon />
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
      </div>
    );
  }
}

export default Role;
