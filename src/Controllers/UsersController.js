import axios from 'axios';

class UsersController {
  getUsers = async () => {
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/usuario/infoUsuarios')
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
      .post('https://api-la-puntada.herokuapp.com/api/usuario/registroUsuario', dataUser)
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

  getRolUser = async (idRol) => {
    let res;
    await axios
      .post(`https://api-la-puntada.herokuapp.com/api/usuario/obtenerRol/${idRol}`)
      .then((response) => {
        res = { err: false, item: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };
}
export default UsersController;
