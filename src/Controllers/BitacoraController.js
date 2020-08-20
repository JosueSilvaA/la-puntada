import axios from 'axios';

class BitacoraController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  getInfoBitacora = async () => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/bitacora/obtenerBitacoraGeneral', {
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

  getInfoBitacoraUsuario = async (idUsuario) => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get(
        `https://api-la-puntada.herokuapp.com/api/bitacora/obtenerBitacoraEmpleado/${idUsuario}`,
        {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };
}
export default BitacoraController;
