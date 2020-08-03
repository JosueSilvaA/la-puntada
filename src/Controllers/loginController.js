import axios from 'axios';

class LoginController {
  async Autenticar(usuario, contrasena, remember) {
    this.data = { usuario, contrasena };
    let datosRespuesta;
    await axios
      .post('https://api-la-puntada.herokuapp.com/api/usuario/login', this.data)
      .then((res) => {
        if (!res.data.Error) {
          if (remember) {
            window.localStorage.setItem('userToken', res.data.Items.token);
          } else {
            window.sessionStorage.setItem('userToken', res.data.Items.token);
          }
        }
        datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return datosRespuesta;
  }

  GetInfoUser = async (idUser) => {
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/infoUsuario/${idUser}`)
      .then((response) => {
        res = { err: false, item: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  GetInfoRol = async (idRol) => {
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/obtenerRolPrivilegios/${idRol}`)
      .then((response) => {
        res = { err: false, items: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };
}

export default LoginController;
