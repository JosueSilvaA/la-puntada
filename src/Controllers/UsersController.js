/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios';

class UsersController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  getUsers = async () => {
    const token = this.getUserLogToken();
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/usuario/infoUsuarios', {
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

  registerUser = async (data) => {
    const token = this.getUserLogToken();
    let Res;
    const dataUser = {
      nombres: data.nombres,
      apellidos: data.apellido,
      usuario: data.usuario,
      direccion: 'Debes actualizar tu dirección',
      correo: data.correo,
      contrasena: data.contrasena,
      identidad: data.identidad,
      telefono: data.telefono,
    };

    await axios
      .post('https://api-la-puntada.herokuapp.com/api/usuario/registroUsuario', dataUser, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = res.data;
        return res;
      })
      .catch((err) => {
        Res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
        return err;
      });
    return Res;
  };

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
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  getRolUser = async (idRol) => {
    const token = this.getUserLogToken();
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/obtenerRol/${idRol}`, {
        headers: {
          'access-token': token,
        },
      })
      .then((response) => {
        res = { err: false, item: response.data.Items };
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  changeRolUser = async (id, rol) => {
    const token = this.getUserLogToken();
    let res;
    const data = {
      id,
      rol,
    };
    await axios
      .put(`https://api-la-puntada.herokuapp.com/api/usuario/${id}/cambiarRol`, data, {
        headers: {
          'access-token': token,
        },
      })
      .then((response) => {
        if (!response.data.Error) {
          res = { err: false, message: response.data.Response };
        } else {
          res = { err: true, message: response.data.Response };
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  deleteUser = async (id) => {
    let res;
    const token = this.getUserLogToken();
    await axios
      .put(`https://api-la-puntada.herokuapp.com/api/usuario/${id}/cambiarEstado`, id, {
        headers: {
          'access-token': token,
        },
      })
      .then((response) => {
        if (!res.data.Error) {
          res = { err: false, message: response.data.Response };
        } else {
          res = { err: true, message: response.data.Response };
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return res;
  };

  changeUserImage = async (userId, image) => {
    let res;
    const token = this.getUserLogToken();
    const data = new FormData();
    data.append('image', image);
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/usuario/cambiarImagenUsuario/${userId}`,
        data,
        {
          headers: {
            'access-token': token,
            'name-file': userId,
          },
        }
      )
      .then((response) => {
        if (!response.data.Error) {
          res = { err: false, message: response.data.Response };
        } else {
          res = { err: true, message: response.data.Response };
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return res;
  };

  changeUserPassword = async (data) => {

    const token = this.getUserLogToken();
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/usuario/cambiarImagenUsuario/${idUser}`,
        data,
        {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((response) => {
        if (!response.data.Error) {
          res = { err: false, message: response.data.Response };
        } else {
          res = { err: true, message: response.data.Response };
        }
      })
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });

    return res;
  };
}
export default UsersController;
