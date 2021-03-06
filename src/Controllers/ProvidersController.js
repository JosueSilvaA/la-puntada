import axios from 'axios';

class ProvidersController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  getProviders = async () => {
    const token = this.getUserLogToken();
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/proveedor/obtenerProveedores', {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  getProvider = async (idProvider) => {
    const token = this.getUserLogToken();
    let Res;
    await axios
      .get( `https://api-la-puntada.herokuapp.com/api/proveedor/${idProvider}/obtenerProveedor`, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = { err: false, item: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  newProvider = async (provider, tipoProducto) => {
    const token = this.getUserLogToken();
    let Res;
    const newProvider = {
      nombre: provider.nombre,
      rtn: provider.rtn,
      telefono: provider.telefono,
      direccion: provider.direccion,
      tipoProducto,
    };
    await axios
      .post('https://api-la-puntada.herokuapp.com/api/proveedor/registroProveedor', newProvider, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        if (!res.data.Error) {
          Res = res.data;
        } else {
          Res = new Error(`${res.data.Response}`);
        }
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  deleteProvider = async (idProvider) => {
    const token = this.getUserLogToken();
    let Res;
    let dato ={
      nombre:'dato'
    }
    await axios
      .put(`https://api-la-puntada.herokuapp.com/api/proveedor/${idProvider}/eliminarProveedor`,dato, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        
        Res = { err: false, item: res.data };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };
}
export default ProvidersController;
