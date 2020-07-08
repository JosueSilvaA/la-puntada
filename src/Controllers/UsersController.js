import axios from 'axios';

const UsersController = async () => {
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

export default UsersController;
