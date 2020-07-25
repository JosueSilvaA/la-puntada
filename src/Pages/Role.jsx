/* eslint-disable class-methods-use-this */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SecurityIcon from '@material-ui/icons/Security';
import Divider from '@material-ui/core/Divider';
import RoleController from '../Controllers/RoleController';
import AppBar from '../Components/AppBar';

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
       <AppBar titulo={'Roles'}></AppBar>
        <List>
          {loaded
            ? roles.map((e, i) => (
                <ListItem button onClick={() => this.handleClick(e._id, e.nombre)}>
                  <ListItemAvatar>
                    <Avatar>
                      <SecurityIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={e.nombre} secondary="Jan 9, 2014" />
                </ListItem>
              ))
            : ''}
          <Divider variant="inset" component="li" />
        </List>
     </div>
    );
  }
}

export default Role;
