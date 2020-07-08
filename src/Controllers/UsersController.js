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
    {
       "nombres":"Josue ",
       "apellido":"Silva",
       "usuario":"silva",
       "direccion":"Buenos Aires",
       "correo":"carlosvazquez@gmail.com",
       "contrasena":"password",
       "rol":1,
       "identidad":"1208199809456",
       "telefono":"88445566"
  }
  */
  registerUser = async (data) => {
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/usuario/infoUsuarios', data)
      .then((res) => {
        Res = res.data;
        return res;
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    console.log(Res);
    return Res;
  };
}
export default UsersController;
