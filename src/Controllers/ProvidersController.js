import axios from 'axios';

class ProvidersController {
    getProviders = async () =>{
        let Res;
        await axios
            .get('https://api-la-puntada.herokuapp.com/api/proveedor/obtenerProveedores')
            .then((res) => {
                Res = { err: false, items: res.data.Items };
            })
            .catch((err) => {
                Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
                return err;
            });
    return Res;
    }

    newProvider = async (provider,tipoProducto) =>{
        let Res;
        const newProvider = {
            nombre:provider.nombre,
            rtn:provider.rtn,
            telefono:provider.telefono,
            direccion:provider.direccion,
            tipoProducto:tipoProducto
          };
        await axios
            .post('https://api-la-puntada.herokuapp.com/api/proveedor/registroProveedor',newProvider)
            .then((res) => {
                Res = res.data;
            })
            .catch((err) => {
                Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
                return err;
            });
    return Res;

    }
  }
  export default ProvidersController;
  