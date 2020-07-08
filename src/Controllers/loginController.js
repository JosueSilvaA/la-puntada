import axios from 'axios';

class LoginController {
  async Autenticar(usuario, contrasena) {
    this.data = { usuario, contrasena };
    let datosRespuesta;
    await axios
      .post('https://api-la-puntada.herokuapp.com/api/usuario/login', this.data)
      .then((res) => {
        datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return datosRespuesta;
  }
}

export default LoginController;
