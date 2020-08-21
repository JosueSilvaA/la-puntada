/* eslint-disable no-undef */
import axios from 'axios';

class Permissions {
  routesPermissions = async (token) => {
    let res;

    await axios
      .get('https://api-la-puntada.herokuapp.com/api/privilegio/privilegiosUsuario', {
        headers: {
          'access-token': token,
        },
      })
      .then((result) => {
        res = { err: false, items: result.data.Items };
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        res = { err: false, items: PermissionsRoutes };
      });
    return res;
  };

  ViewUserToken = async () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = window.sessionStorage.getItem('userToken');
    }
    if (token === null) {
      return false;
    }
    return true;
  };

  RedirectUser = () => {
    window.location.replace('/login');
  };
}

export default Permissions;
