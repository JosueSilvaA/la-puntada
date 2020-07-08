import axios from 'axios';

class UsersController {
  getUsers = async () => {
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/usuario/infoUsuarios')
      .then((res) => {
        Res = res.data;
        return res;
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res.Items;
  };

  /*
nombres:req.body.nombres,
          apellido:req.body.apellido,
          usuario:req.body.usuario,
          direccion:req.body.direccion,
          correo:req.body.correo,
          contrasena:req.body.contrasena,
          identidad:req.body.identidad,
          telefono:req.body.telefono,
          estado:req.body.estado,
          conexiones:[]
*/

  registerUser = async (data) => {
    let Res;
    const dataUser = {
      nombres: data.nombres,
      apellido: data.apellido,
      usuario: data.usuario,
      direccion: 'Actualizar dirección',
      correo: data.correo,
      contrasena: data.contrasena,
      identidad: data.identidad,
      telefono: data.telefono,
      estado: true,
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
}
export default UsersController;