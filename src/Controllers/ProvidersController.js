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
  }
  export default ProvidersController;
  