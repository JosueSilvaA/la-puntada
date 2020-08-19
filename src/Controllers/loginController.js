import axios from 'axios';

class LoginController {

  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  async Autenticar(usuario, contrasena, remember) {
    this.data = { usuario, contrasena };
    let datosRespuesta;
    await axios
      .post('https://api-la-puntada.herokuapp.com/api/usuario/login', this.data)
      .then((res) => {
        console.log(res.data)
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
    const token = this.getUserLogToken();
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/infoUsuario/${idUser}`, {
        headers: {
          'access-token': token,
        },
      })
      .then((response) => {
        res = { err: false, item: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  GetInfoRol = async (idRol) => {
    const token = this.getUserLogToken();
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/obtenerRolPrivilegios/${idRol}`, {
        headers: {
          'access-token': token,
        },
      })
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
